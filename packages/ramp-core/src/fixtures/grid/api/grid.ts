import { FixtureInstance } from '@/api';
import { GridConfig } from '../store';
import TableStateManager from '../store/table-state-manager';

export class GridAPI extends FixtureInstance {
    /**
     * Open the grid for the layer with the given uid.
     *
     * @param {string} uid
     * @param {boolean} [open] force panel open or closed
     * @memberof GridAPI
     */
    toggleGrid(uid: string, open?: boolean): void {
        // get GridConfig for specified uid
        let gridSettings: GridConfig | undefined = this.$vm.$store.get(`grid/grids@${uid}`);

        // if no GridConfig exists for the given uid, create it.
        if (gridSettings === undefined) {
            gridSettings = {
                uid: uid,
                state: new TableStateManager({
                    table: {
                        showFilter: true,
                        filterByExtent: false,
                    },
                }),
            };

            this.$vm.$store.set('grid/addGrid!', gridSettings);
        }

        const prevUid = this.$vm.$store.get('grid/currentUid', uid ? uid : null);
        this.$vm.$store.set('grid/currentUid', uid ? uid : null);

        const panel = this.$iApi.panelAPI.get('grid-panel');

        if (open === false) {
            // force close
            panel.close();
            return;
        }

        if (!panel.isOpen) {
            this.$iApi.panelAPI.open('grid-panel');
        } else if (prevUid !== uid || open === true) {
            // don't toggle off if different layer or force open, use key prop to force rerender
            panel.show({ screen: 'grid-screen', props: { key: uid } });
        } else {
            panel.close();
        }
    }
}
