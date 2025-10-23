import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ROOT_KEY } from '../constants';
import type { KeyboardnavHandlerAPI, KeyboardnavChainAction } from '../types';

export interface KeyItem {
    key: string;
    description: Record<string, string>;
    handler?: (api: KeyboardnavHandlerAPI, e: KeyboardEvent) => void;
}

export interface NamespaceRegistration {
    name: Record<string, string>;
    keys: KeyItem[];
    handler?: (api: KeyboardnavHandlerAPI, e: KeyboardEvent, key: string) => void;
    activeHandler?: (api: KeyboardnavHandlerAPI, e?: KeyboardEvent) => void;
    deactiveHandler?: (e?: KeyboardEvent) => void;
}

export type ChainState = 'idle' | 'awaitNamespace' | 'awaitAction' | 'complete';

export interface KeyboardnavStore {
    activeNamespace: string | null;
    namespaces: Record<string, NamespaceRegistration>;
    helpVisible: boolean;
    keyChain: string[];
    lastAction: { namespace: string; key: string } | null;
    chainState: ChainState;
    register: (namespace: string, options: NamespaceRegistration) => string;
    unregister: (namespace: string) => void;
    activate: (namespace: string, e: KeyboardEvent, options?: { suppressHandler?: boolean }) => void;
    deactivate: (e?: KeyboardEvent, options?: { suppressHandler?: boolean }) => void;
    trigger: (
        key: string,
        e: KeyboardEvent
    ) => { namespace: string; key: string; chainAction?: KeyboardnavChainAction } | null;
    setHelpVisible: (val: boolean) => void;
    resetChain: (options?: { event?: KeyboardEvent; suppressHandler?: boolean; preserveLastAction?: boolean; preserveChain?: boolean }) => void;
    setChain: (keys: string[]) => void;
    appendKey: (key: string) => void;
    popChain: () => string | undefined;
    setLastAction: (action: { namespace: string; key: string } | null) => void;
    setChainState: (state: ChainState) => void;
    finalizeChain: (options?: { event?: KeyboardEvent }) => void;
}

export const useKeyboardnavStore = defineStore('keyboardnav', () => {
    const activeNamespace = ref<string | null>(null);
    const namespaces = ref<Record<string, NamespaceRegistration>>({});
    const helpVisible = ref<boolean>(false);
    const keyChain = ref<string[]>([]);
    const lastAction = ref<{ namespace: string; key: string } | null>(null);
    const chainState = ref<ChainState>('idle');

    const RESERVED = ['H', '?'];

    function findFreeLetter(): string | null {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (const ch of alphabet) {
            if (!namespaces.value[ch] && !RESERVED.includes(ch)) return ch;
        }
        return null;
    }

    function register(namespace: string, options: NamespaceRegistration): string {
        let ns = namespace.toUpperCase();
        if (RESERVED.includes(ns) || namespaces.value[ns]) {
            const free = findFreeLetter();
            if (free) {
                ns = free;
            } else {
                console.error('No available keyboard namespace letters');
            }
        }

        if (!options.handler) {
            for (const k of options.keys) {
                if (!k.handler) {
                    console.error(
                        `Keyboardnav registration for ${ns} requires handlers for all keys or a parent handler`
                    );
                }
            }
        }

        namespaces.value[ns] = options;
        return ns;
    }

    function setHelpVisible(val: boolean): void {
        if (helpVisible.value === val) return;
        helpVisible.value = val;
    }

    function unregister(namespace: string): void {
        if (activeNamespace.value === namespace) {
            activeNamespace.value = null;
        }
        delete namespaces.value[namespace];
    }

    function createHandlerAPI(namespaceKey: string, e: KeyboardEvent, state: { action: KeyboardnavChainAction | null }): KeyboardnavHandlerAPI {
        return {
            clear: () => {
                state.action = 'clear';
                resetChain({ event: e, suppressHandler: true });
            },
            reset: () => {
                state.action = 'reset';
                const nsKey = namespaceKey || keyChain.value[1];
                if (!nsKey) {
                    resetChain({ event: e, suppressHandler: true });
                    return;
                }
                setChain([ROOT_KEY, nsKey]);
                setLastAction(null);
                setChainState('awaitAction');
                activeNamespace.value = nsKey;
            }
        };
    }

    function activate(namespace: string, e: KeyboardEvent, options?: { suppressHandler?: boolean }): void {
        activeNamespace.value = namespace;
        if (options?.suppressHandler) return;
        const state = { action: null as KeyboardnavChainAction | null };
        const api = createHandlerAPI(namespace, e, state);
        namespaces.value[namespace]?.activeHandler?.(api, e);
    }

    function deactivate(e?: KeyboardEvent, options?: { suppressHandler?: boolean }): void {
        if (activeNamespace.value && !options?.suppressHandler) {
            namespaces.value[activeNamespace.value]?.deactiveHandler?.(e);
        }
        activeNamespace.value = null;
    }

    function trigger(
        key: string,
        e: KeyboardEvent
    ): { namespace: string; key: string; chainAction?: KeyboardnavChainAction } | null {
        const ns = activeNamespace.value;
        if (!ns) return null;
        const options = namespaces.value[ns];
        if (!options) return null;
        const state: { action: KeyboardnavChainAction | null } = { action: null };
        const api = createHandlerAPI(ns, e, state);

        if (options.handler) {
            options.handler(api, e, key);
            return { namespace: ns, key, chainAction: state.action ?? undefined };
        }

        const item = options.keys.find(k => k.key === key);
        item?.handler?.(api, e);
        if (item) {
            return { namespace: ns, key: item.key, chainAction: state.action ?? undefined };
        }

        return null;
    }

    function resetChain(options?: {
        event?: KeyboardEvent;
        suppressHandler?: boolean;
        preserveLastAction?: boolean;
        preserveChain?: boolean;
    }): void {
        deactivate(options?.event, { suppressHandler: options?.suppressHandler });
        if (!options?.preserveChain) keyChain.value = [];
        if (!options?.preserveLastAction) lastAction.value = null;
        chainState.value = 'idle';
    }

    function setChain(keys: string[]): void {
        keyChain.value = [...keys];
    }

    function appendKey(key: string): void {
        keyChain.value = [...keyChain.value, key];
    }

    function popChain(): string | undefined {
        if (!keyChain.value.length) return undefined;
        const keys = [...keyChain.value];
        const popped = keys.pop();
        keyChain.value = keys;
        return popped;
    }

    function setLastAction(action: { namespace: string; key: string } | null): void {
        lastAction.value = action;
    }

    function setChainState(state: ChainState): void {
        chainState.value = state;
    }

    function finalizeChain(options?: { event?: KeyboardEvent }): void {
        deactivate(options?.event, { suppressHandler: true });
        chainState.value = 'complete';
    }

    return {
        activeNamespace,
        namespaces,
        helpVisible,
        keyChain,
        lastAction,
        chainState,
        register,
        unregister,
        activate,
        deactivate,
        trigger,
        setHelpVisible,
        resetChain,
        setChain,
        appendKey,
        popChain,
        setLastAction,
        setChainState,
        finalizeChain
    } as unknown as KeyboardnavStore;
});
