import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';

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

export interface KeyboardnavStore {
    activeNamespace: Ref<string | null>;
    namespaces: Ref<Record<string, NamespaceRegistration>>;
    helpVisible: Ref<boolean>;
    keyChain: Ref<string[]>;
    lastAction: Ref<{ namespace: string; key: string } | null>;
    register: (namespace: string, options: NamespaceRegistration) => string;
    unregister: (namespace: string) => void;
    activate: (namespace: string, e: KeyboardEvent) => void;
    deactivate: (e?: KeyboardEvent) => void;
    trigger: (key: string, e: KeyboardEvent) => { namespace: string; key: string } | null;
    setHelpVisible: (val: boolean) => void;
    resetChain: (e?: KeyboardEvent) => void;
    setChain: (keys: string[]) => void;
    appendKey: (key: string) => void;
    popChain: () => string | undefined;
    setLastAction: (action: { namespace: string; key: string } | null) => void;
}

export const useKeyboardnavStore = defineStore('keyboardnav', () => {
    const activeNamespace = ref<string | null>(null);
    const namespaces = ref<Record<string, NamespaceRegistration>>({});
    const helpVisible = ref<boolean>(false);
    const keyChain = ref<string[]>([]);
    const lastAction = ref<{ namespace: string; key: string } | null>(null);

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

    function deactivate(e?: KeyboardEvent): void {
        if (activeNamespace.value) {
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

    function resetChain(e?: KeyboardEvent): void {
        deactivate(e);
        keyChain.value = [];
        lastAction.value = null;
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

    return {
        activeNamespace,
        namespaces,
        helpVisible,
        keyChain,
        lastAction,
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
        setLastAction
    } as KeyboardnavStore;
});
