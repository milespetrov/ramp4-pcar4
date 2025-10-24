import { KeyboardnavHandlerAPI, KeyboardnavChainAction } from '../types';
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
    lastAction: {
        namespace: string;
        key: string;
    } | null;
    chainState: ChainState;
    register: (namespace: string, options: NamespaceRegistration) => string;
    unregister: (namespace: string) => void;
    activate: (namespace: string, e: KeyboardEvent, options?: {
        suppressHandler?: boolean;
    }) => void;
    deactivate: (e?: KeyboardEvent, options?: {
        suppressHandler?: boolean;
    }) => void;
    trigger: (key: string, e: KeyboardEvent) => {
        namespace: string;
        key: string;
        chainAction?: KeyboardnavChainAction;
    } | null;
    setHelpVisible: (val: boolean) => void;
    resetChain: (options?: {
        event?: KeyboardEvent;
        suppressHandler?: boolean;
        preserveLastAction?: boolean;
        preserveChain?: boolean;
    }) => void;
    setChain: (keys: string[]) => void;
    appendKey: (key: string) => void;
    popChain: () => string | undefined;
    setLastAction: (action: {
        namespace: string;
        key: string;
    } | null) => void;
    setChainState: (state: ChainState) => void;
    finalizeChain: (options?: {
        event?: KeyboardEvent;
    }) => void;
}
export declare const useKeyboardnavStore: import('pinia').StoreDefinition<"keyboardnav", import('pinia')._UnwrapAll<Pick<KeyboardnavStore, "activeNamespace" | "namespaces" | "helpVisible" | "keyChain" | "lastAction" | "chainState">>, Pick<KeyboardnavStore, never>, Pick<KeyboardnavStore, "register" | "trigger" | "unregister" | "activate" | "deactivate" | "setHelpVisible" | "resetChain" | "setChain" | "appendKey" | "popChain" | "setLastAction" | "setChainState" | "finalizeChain">>;
