import { FixtureInstance } from '../../../api';
import { NamespaceRegistration } from '../store/keyboardnav-store';
/**
 * @internal
 */
export declare class KeyboardnavAPI extends FixtureInstance {
    private keyboardnavStore;
    private _isInput;
    /**
     * Register a namespace letter and its keyboard options.
     *
     * @param namespace requested namespace letter.
     * @param options registration object describing keys and handlers.
     * @returns final namespace letter used for registration.
     */
    register(namespace: string, options: NamespaceRegistration): string;
    /** @internal */
    added(): void;
    /** @internal */
    removed(): void;
    private _handleKeyDown;
    private _handleBlur;
}
