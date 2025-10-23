import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface KeyItem {
    key: string;
    description: Record<string, string>;
    handler?: (e: KeyboardEvent) => void;
}

export interface NamespaceRegistration {
    name: Record<string, string>;
    keys: KeyItem[];
    handler?: (key: string, e: KeyboardEvent) => void;
    activeHandler?: (e?: KeyboardEvent) => void;
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
    activate: (namespace: string, e: KeyboardEvent) => void;
    deactivate: (e?: KeyboardEvent, options?: { suppressHandler?: boolean }) => void;
    trigger: (key: string, e: KeyboardEvent) => { namespace: string; key: string } | null;
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

    function activate(namespace: string, e: KeyboardEvent): void {
        activeNamespace.value = namespace;
        namespaces.value[namespace]?.activeHandler?.(e);
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
    ): { namespace: string; key: string } | null {
        const ns = activeNamespace.value;
        if (!ns) return null;
        const options = namespaces.value[ns];
        if (!options) return null;
        if (options.handler) {
            options.handler(key, e);
            return { namespace: ns, key };
        } else {
            const item = options.keys.find(k => k.key === key);
            item?.handler?.(e);
            if (item) {
                return { namespace: ns, key: item.key };
            }
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
