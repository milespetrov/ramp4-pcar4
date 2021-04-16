import { HelpAPI } from './api/help';
import { help, HelpConfig } from './store/index';
import HelpV from './help.vue';
import HelpNavV from './nav-button.vue';

import messages from './lang/lang.csv';

class HelpFixture extends HelpAPI {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('help-nav-button', HelpNavV);

        this.$vApp.$store.registerModule('help', help());

        this.$iApi.panelAPI.register(
            {
                'help-panel': {
                    screens: {
                        'help-screen': HelpV,
                    },
                    style: {
                        width: '350px',
                    },
                },
            },
            {
                i18n: { messages },
            }
        );
        this.$iApi.panelAPI.open('help-panel');

        // parse help section of config and store information in help store
        this._parseConfig(this.config);
        this.$vm.$watch(
            () => this.config,
            (value: HelpConfig | undefined) => this._parseConfig(value)
        );
    }

    removed(): void {
        this.$vApp.$store.unregisterModule('help');
    }
}

export default HelpFixture;
