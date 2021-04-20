import CrosshairsV from './crosshairs.vue';

import { FixtureInstance } from '@/api';

class CrosshairsFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);
        this.$vApp.component('CrosshairsV', CrosshairsV);
        //const innerShell = this.$vm.$el.getElementsByClassName('inner-shell')[0];
        //const crosshairs = this.extend(CrosshairsV);
        //innerShell.append(crosshairs.$vm.$el);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default CrosshairsFixture;
