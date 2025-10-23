export interface KeyboardnavHandlerAPI {
    /**
     * Clears the entire keyboard navigation chain and returns it to the idle state.
     */
    clear(): void;

    /**
     * Resets the chain to the currently active namespace (feature group) while
     * keeping the root key so a new action can be selected.
     */
    reset(): void;
}

export type KeyboardnavChainAction = 'clear' | 'reset';
