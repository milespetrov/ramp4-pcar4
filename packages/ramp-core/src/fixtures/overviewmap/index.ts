import { OverviewmapAPI } from './api/overviewmap';
import { overviewmap, OverviewmapConfig } from './store/index';
import OverviewmapV from './overviewmap.vue';
import messages from './lang/lang.csv';

class OverviewmapFixture extends OverviewmapAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vm.$store.registerModule('overviewmap', overviewmap());

        Object.entries(messages).forEach((value) => (<any>this.$vm.$i18n).mergeLocaleMessage(...value));

        this._parseConfig(this.config);
        this.$vm.$watch(
            () => this.config,
            (value: OverviewmapConfig | undefined) => this._parseConfig(value)
        );

        this.$vApp.component('OverviewmapV', OverviewmapV);
        //const innerShell = this.$vm.$el.getElementsByClassName('inner-shell')[0];
        //const overviewInstance = this.extend(OverviewmapV, { store: this.$vm.$store, i18n: <any>this.$vApp.$i18n });
        //innerShell.append(overviewInstance.$vm.$el);
    }

    removed() {
        console.log(`[fixture] ${this.id} removed`);
        this.$vm.$store.unregisterModule('overviewmap');
    }
}

export default OverviewmapFixture;
