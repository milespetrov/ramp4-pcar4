import { LegendAPI } from './api/legend';
import { legend, LegendConfig } from './store/index';
import LegendV from './legend.vue';
import LegendAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv';

class LegendFixture extends LegendAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);
        this.$iApi.panelAPI.register(
            {
                'legend-panel': {
                    screens: {
                        'legend-screen': LegendV,
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

        this.$iApi.panelAPI.open('legend-panel');

        // TODO: register legend panel
        this.$iApi.component('legend-appbar-button', LegendAppbarButtonV);
        this.$vApp.$store.registerModule('legend', <any>legend());

        // parse legend section of config and store information in legend store
        this._parseConfig(this.config);
        this.$vm.$watch(
            () => this.config,
            (value: LegendConfig | undefined) => this._parseConfig(value)
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('legend');
    }
}

export default LegendFixture;
