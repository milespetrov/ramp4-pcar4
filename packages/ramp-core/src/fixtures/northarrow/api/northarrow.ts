import { FixtureInstance } from '@/api';
import { NortharrowConfig, NortharrowStore } from '../store';

export class NortharrowAPI extends FixtureInstance {
    /**
     * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
     *
     * @param {NortharrowConfig} [northarrowConfig]
     * @memberof NortharrowAPI
     */
    _parseConfig(northarrowConfig?: NortharrowConfig) {
        if (!northarrowConfig) return;
        this.$vm.$store.set(NortharrowStore.arrowIcon, northarrowConfig.arrowIcon);
        this.$vm.$store.set(NortharrowStore.poleIcon, northarrowConfig.poleIcon);
    }

    get config(): NortharrowConfig | any {
        return super.config;
    }
}
