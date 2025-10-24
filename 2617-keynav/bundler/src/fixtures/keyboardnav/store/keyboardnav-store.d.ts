import { Ref } from '../../../../vue/dist/vue.esm-bundler.js';
export interface KeyItem {
    key: string;
    description: Record<string, string>;
    handler?: (e: KeyboardEvent) => void;
}
export interface NamespaceRegistration {
    name: Record<string, string>;
    keys: KeyItem[];
    handler?: (key: string, e: KeyboardEvent) => void;
    activeHandler?: (e: KeyboardEvent) => void;
    deactiveHandler?: (e: KeyboardEvent) => void;
}
export interface KeyboardnavStore {
    activeNamespace: Ref<string | null>;
    namespaces: Ref<Record<string, NamespaceRegistration>>;
    helpVisible: Ref<boolean>;
    register: (namespace: string, options: NamespaceRegistration) => string;
    unregister: (namespace: string) => void;
    activate: (namespace: string, e: KeyboardEvent) => void;
    deactivate: (e?: KeyboardEvent) => void;
    trigger: (key: string, e: KeyboardEvent) => void;
    setHelpVisible: (val: boolean) => void;
}
export declare const useKeyboardnavStore: import('pinia').StoreDefinition<"keyboardnav", import('pinia')._UnwrapAll<Pick<KeyboardnavStore, "activeNamespace" | "namespaces" | "helpVisible">>, Pick<KeyboardnavStore, never>, Pick<KeyboardnavStore, "register" | "trigger" | "unregister" | "activate" | "deactivate" | "setHelpVisible">>;
