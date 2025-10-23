# Keyboard Navigation Fixture

The keyboard navigation fixture provides a command palette style workflow for people who rely on a keyboard or screen reader. It exposes a global shortcut (`S`) that opens a chain of keys you can use to focus panels, launch feature namespaces, and run fixture-specific actions without touching the mouse.

While RAMP ships with a help overlay that lists every registered shortcut, each fixture is responsible for registering its own namespace and actions. This page explains how to enable the fixture, how the navigation flow works, and how to wire up custom shortcuts from your fixture code.

## Enabling the Fixture

1. Add `keyboardnav` to the list of fixtures that load at startup.  
2. (Optional) Provide an empty `keyboardnav` configuration object if you prefer to keep all fixtures explicitly listed in the config.

```jsonc
{
  "startingFixtures": ["legend", "appbar", "keyboardnav"],
  "fixtures": {
    "keyboardnav": {}
  }
}
```

Once the fixture is active you can press `S` anywhere inside RAMP to start a keyboard navigation chain.

## Default Controls

| Keys | Behaviour |
|------|-----------|
| `S` | Start the keyboard navigation chain (root command). |
| `S` + `<namespace>` | Activate a fixture namespace (for example `D` for Draw tools). |
| `S H` | Toggle the built-in help overlay that lists every namespace and action. |
| `1`-`5` | Focus the corresponding open panel while the chain is idle. |
| `Backspace` | Step back one key in the current chain. |
| `Escape` | Cancel the current chain, or close the focused panel when idle. |

Once a namespace is active the fixture decides which action keys are available. Every action is described in the help overlay so that users can explore with `S H` at any time.

## Registering Shortcuts in a Fixture

Use the `KeyboardnavAPI` from inside your fixture to register a namespace and its actions. The final namespace letter is returned so you can keep track of collisions or auto-assigned letters.

```ts
import type { KeyboardnavAPI } from '@/fixtures/keyboardnav/api/keyboardnav';
import type { KeyboardnavHandlerAPI } from '@/fixtures/keyboardnav/types';

async function registerKeyboardShortcuts(iApi: InstanceAPI) {
    const keyboardNav = (await iApi.fixture.isLoaded('keyboardnav')) as KeyboardnavAPI;

    const namespace = keyboardNav.register('D', {
        name: {
            en: 'Draw tools',
            fr: 'Outils de dessin'
        },
        activeHandler: nav => {
            drawStore.setActiveTool('');
            // nav provides clear/reset helpers if you need to manage the chain manually.
        },
        deactiveHandler: () => drawStore.setActiveTool(null),
        keys: [
            {
                key: 'L',
                description: {
                    en: 'Draw a line',
                    fr: 'Tracer une ligne'
                },
                handler: (nav: KeyboardnavHandlerAPI, event: KeyboardEvent) => {
                    event.preventDefault();
                    drawStore.setActiveTool('polyline');

                    // Leave the draw namespace active so the user can pick another tool.
                    nav.reset();
                }
            },
            {
                key: 'C',
                description: {
                    en: 'Clear graphics',
                    fr: 'Effacer les graphiques'
                },
                handler: (nav, event) => {
                    event.preventDefault();
                    drawStore.clearGraphics();

                    // Exit the chain entirely so the user starts fresh.
                    nav.clear();
                }
            }
        ]
    });

    console.debug(`Keyboard navigation namespace registered: ${namespace}`);
}
```

If the letter you request is already taken (or reserved for the help overlay) the fixture automatically assigns the next available letter and returns it.

## Registration Options Reference

The `register` method accepts a `NamespaceRegistration` object. Each field is optional unless stated otherwise.

- **name** (`Record<string, string>`, required): Localized label for the namespace. Keys should match available locale codes (for example `en`, `fr`).  
- **keys** (`KeyItem[]`, required): List of actions exposed once the namespace is active.  
- **handler** (`(api, event, key) => void`, optional): Parent handler that can respond to any key in the namespace. Use this when every key shares the same logic. The third argument is the uppercase key that was pressed.  
- **activeHandler** (`(api: KeyboardnavHandlerAPI, event?: KeyboardEvent) => void`, optional): Invoked when the namespace becomes active (after `S` plus the namespace letter). Handy for priming state or stashing the API for later use.  
- **deactiveHandler** (`(event?: KeyboardEvent) => void`, optional): Invoked when the namespace is dismissed without suppression. Use it to clean up focus or reset state.

Each `KeyItem` entry supports the following properties:

- **key** (`string`, required): The single character (A–Z, 0–9, etc.) that triggers the action. It is stored in uppercase.  
- **description** (`Record<string, string>`, required): Localized description shown in the help overlay.  
- **handler** (`(api, event) => void`, optional): Called when the user completes the chain with this key. If you omit the handler you must supply a namespace-level `handler` instead.

> Tip: Do not mutate the navigation store directly. Use the handler API described below so that the chain stays in sync with the fixture UI.

## Handler Callback API

When a handler is invoked the first parameter is a `KeyboardnavHandlerAPI` object followed by the `KeyboardEvent`. Namespace-level handlers receive the pressed key as a third argument.

```ts
interface KeyboardnavHandlerAPI {
    clear(): void;
    reset(): void;
}
```

- `reset()` keeps the current namespace in the chain (`S Namespace`) and removes any action keys. The namespace stays active but its `activeHandler` is not re-run, so perform any state resets before calling `reset()`. Use this when you want to let users run another action immediately without pressing `S` again.  
- `clear()` cancels the entire chain, deactivates the namespace, and returns the navigation state to idle. Use this when the action completes a workflow and you want the next shortcut to start from scratch.

Both methods ensure that the internal store updates consistently—handlers do not need to call `useKeyboardnavStore` themselves.

## Best Practices

- Call `nav.reset()` after actions that keep the namespace available (for example switching draw tools).  
- Call `nav.clear()` after destructive or one-off actions (closing panels, clearing data) so that accessibility focus returns to the idle state.  
- Provide descriptions for every key so the help overlay remains useful.  
- Consider storing the returned namespace letter if your fixture can be configured with custom keys—this makes it easy to surface the active shortcut in your UI.  
- If your fixture renders focusable elements while a namespace is active, use the `activeHandler`/`deactiveHandler` hooks to move focus in a screen-reader friendly way.
