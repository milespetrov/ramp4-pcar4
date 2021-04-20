import { GridAPI } from './api/grid';
import { grid } from './store/index';

import GridV from './grid.vue';

import messages from './lang/lang.csv';

class GridFixture extends GridAPI {
    async added() {
        this.$iApi.panelAPI.register(
            {
                'grid-panel': {
                    screens: {
                        'grid-screen': GridV,
                    },
                    style: {
                        width: '900px',
                    },
                },
            },
            { i18n: { messages } }
        );

        this.$vm.$store.registerModule('grid', <any>grid());
    }

    removed() {
        this.$vm.$store.unregisterModule('grid');
    }
}

export default GridFixture;
