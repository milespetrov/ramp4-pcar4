import { NortharrowAPI } from './api/northarrow';
import { northarrow, NortharrowConfig } from './store/index';
import NortharrowV from './northarrow.vue';

class NortharrowFixture extends NortharrowAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vm.$store.registerModule('northarrow', northarrow());

        this._parseConfig(this.config);
        this.$vm.$watch(
            () => this.config,
            (value: NortharrowConfig | undefined) => this._parseConfig(value)
        );

        this.$vApp.component('NortharrowV', NortharrowV);
        //const innerShell = this.$vm.$el.getElementsByClassName('inner-shell')[0];
        //const northarrowInstance = this.extend(NortharrowV, { store: this.$vm.$store });
        //innerShell.append(northarrowInstance.$vm.$el);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
        this.$vm.$store.unregisterModule('northarrow');
    }
}

export default NortharrowFixture;
