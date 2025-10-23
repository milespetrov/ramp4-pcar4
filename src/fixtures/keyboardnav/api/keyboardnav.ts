import { FixtureInstance } from '@/api';
import { useKeyboardnavStore } from '../store/keyboardnav-store';
import type { NamespaceRegistration } from '../store/keyboardnav-store';
import { ROOT_KEY, HELP_NAMESPACE } from '../constants';

/**
 * @internal
 */
export class KeyboardnavAPI extends FixtureInstance {
    private keyboardnavStore = useKeyboardnavStore(this.$vApp.$pinia);
    private _isInput(target: EventTarget | null): boolean {
        if (!target || !(target instanceof HTMLElement)) return false;
        return !!target.closest('input, textarea, [contenteditable="true"]');
    }

    /**
     * Register a namespace letter and its keyboard options.
     *
     * @param namespace requested namespace letter.
     * @param options registration object describing keys and handlers.
     * @returns final namespace letter used for registration.
     */
    register(namespace: string, options: NamespaceRegistration): string {
        const ns = namespace.toUpperCase();
        const finalNs = this.keyboardnavStore.register(ns, options);
        const key = `keyboardnav.ns.${finalNs}`;
        Object.entries(options.name).forEach(([lang, val]) => {
            (<any>this.$iApi.$i18n).mergeLocaleMessage(lang, { [key]: val });
        });
        options.keys.forEach(k => {
            const kKey = `keyboardnav.key.${finalNs}.${k.key}`;
            Object.entries(k.description).forEach(([lang, val]) => {
                (<any>this.$iApi.$i18n).mergeLocaleMessage(lang, { [kKey]: val });
            });
        });
        return finalNs;
    }

    /** @internal */
    added(): void {
        const root = this.$iApi.$rootEl as HTMLElement | null;
        root?.addEventListener('keydown', this._handleKeyDown);
        root?.addEventListener('blur', this._handleBlur);
    }

    /** @internal */
    removed(): void {
        const root = this.$iApi.$rootEl as HTMLElement | null;
        root?.removeEventListener('keydown', this._handleKeyDown);
        root?.removeEventListener('blur', this._handleBlur);
    }

    private _handleKeyDown = (event: Event): void => {
        if (!(event instanceof KeyboardEvent)) return;
        const e = event;
        if (this._isInput(e.target)) return;

        const store = this.keyboardnavStore;
        const chain = store.keyChain;
        const hasModifier = e.altKey || e.ctrlKey || e.metaKey;

        if (!e.shiftKey && !hasModifier) {
            if (!chain.length && /^[1-5]$/.test(e.key)) {
                const idx = parseInt(e.key, 10) - 1;
                const panel = this.$iApi.panel.visible[idx];
                if (panel) {
                    e.preventDefault();
                    this.$iApi.panel.focus(panel);
                }
                return;
            }
        }

        if (e.key === 'Escape') {
            if (chain.length) {
                e.preventDefault();
                store.resetChain(e);
                return;
            }
            if (!e.shiftKey && !hasModifier) {
                const target = e.target as HTMLElement;
                const container = target.closest('[data-cy]') as HTMLElement | null;
                if (container && this.$iApi.$rootEl?.querySelector('.panel-container')?.contains(container)) {
                    e.preventDefault();
                    const id = container.getAttribute('data-cy');
                    if (id) {
                        this.$iApi.panel.close(id);
                    }
                }
            }
            return;
        }

        if ((e.key === 'Backspace' || e.key === 'Delete') && chain.length && !e.shiftKey && !hasModifier) {
            e.preventDefault();
            const removed = store.popChain();
            store.setLastAction(null);
            const activeNamespace = store.activeNamespace;
            if (removed && activeNamespace && removed === activeNamespace) {
                store.deactivate(e);
            }
            return;
        }

        if (e.shiftKey || hasModifier) {
            return;
        }

        const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;

        if (key === ROOT_KEY) {
            e.preventDefault();
            store.deactivate(e);
            store.setChain([ROOT_KEY]);
            store.setLastAction(null);
            return;
        }

        if (!store.keyChain.length) {
            return;
        }

        if (store.keyChain.length === 1) {
            const namespaces = store.namespaces;
            if (key === 'H') {
                e.preventDefault();
                store.appendKey(key);
                store.setLastAction({ namespace: HELP_NAMESPACE, key });
                store.setHelpVisible(!store.helpVisible);
                return;
            }

            if (key in namespaces) {
                e.preventDefault();
                store.appendKey(key);
                store.setLastAction(null);
                store.activate(key, e);
                return;
            }
        }

        const activeNamespace = store.activeNamespace;
        if (activeNamespace && key.length === 1) {
            e.preventDefault();
            store.appendKey(key);
            const action = store.trigger(key, e);
            store.setLastAction(action);
            store.deactivate(e);
            return;
        }

        if (key.length === 1) {
            // Chain is active but key is not handled; record it so the UI reflects the attempted sequence.
            e.preventDefault();
            store.appendKey(key);
            store.setLastAction(null);
        }
    };

    private _handleBlur = (): void => {
        this.keyboardnavStore.resetChain();
        this.keyboardnavStore.setHelpVisible(false);
    };
}
