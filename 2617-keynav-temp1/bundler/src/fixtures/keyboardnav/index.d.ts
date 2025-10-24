import { KeyboardnavAPI } from './api/keyboardnav';
/**
 * Keyboard Navigation Fixture
 *
 * Enables registration of namespace shortcuts (ALT+SHIFT+[Letter]) and
 * subsequent SHIFT+[Letter] shortcuts within the active namespace.
 */
declare class KeyboardnavFixture extends KeyboardnavAPI {
    added(): void;
}
export default KeyboardnavFixture;
