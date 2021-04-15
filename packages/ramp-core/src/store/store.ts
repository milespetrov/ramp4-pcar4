import { createStore as vuexCreateStore, Store as vuexStore } from 'vuex';
import pathify from 'vuex-pathify';

import { config } from '@/store/modules/config';
import { fixture } from '@/store/modules/fixture';
import { layer } from '@/store/modules/layer';
// import { legend } from '@/store/modules/legend';
import { panel } from '@/store/modules/panel';

// pathify.options.deep = 2;

export const createStore = () =>
    vuexCreateStore({
        plugins: [pathify.plugin],
        modules: {
            config: config(),
            fixture: fixture(),
            layer: layer(),
            // legend: legend(),
            panel: panel(),
        },
    });

export type Store = vuexStore<Record<string, unknown>>;

declare module 'vuex' {
    // declare augmentation for Vuex store for Pathify
    interface Store<S> {
        set: <T>(path: string, value: any) => Promise<T> | undefined;
        get: <T>(path: string, ...args: any) => T | undefined;
        copy: <T>(path: string, ...args: any) => T | undefined;
    }
}
