import { createApp, ComponentPublicInstance, DefineComponent } from 'vue';
import { RampMap } from 'ramp-geoapi';
import { RampConfigs } from '@/types';
import { VueI18n } from 'vue-i18n';

import { i18n } from '@/lang';
import screenfull from 'screenfull';

import { createStore, Store } from '@/store';
import { ConfigStore } from '@/store/modules/config';

import { FixtureAPI, PanelAPI, GlobalEvents, EventAPI } from './internal';
import { MapAPI } from './map';

import { FocusList, FocusItem } from '@/directives/focus-list';
import TooltipV from '@/components/util/tooltip.vue';

import PanelScreenV from '@/components/panel-stack/panel-screen.vue';
import PinV from '@/components/panel-stack/controls/pin.vue';
import CloseV from '@/components/panel-stack/controls/close.vue';
import BackV from '@/components/panel-stack/controls/back.vue';
import PanelOptionsMenuV from '@/components/panel-stack/controls/panel-options-menu.vue';
import DropdownMenuV from '@/components/controls/dropdown-menu.vue';
import FullscreenNavV from '@/fixtures/mapnav/buttons/fullscreen-nav.vue';
import HomeNavV from '@/fixtures/mapnav/buttons/home-nav.vue';
import MapnavButtonV from '@/fixtures/mapnav/button.vue';
import DividerV from '@/fixtures/appbar/divider.vue';
import AppbarButtonV from '@/fixtures/appbar/button.vue';

declare module '@vue/runtime-core' {
    //interface ComponentCustomProperties {
    //   $store: any;
    //}

    interface ComponentCustomProperties extends InstanceAPI {
        $store: Store;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        $options: { [key: string]: any };
        $iApi: InstanceAPI;
    }

    interface App extends InstanceAPI {
        $store: Store;
        $i18n: VueI18n;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        $options: { [key: string]: any };
        $iApi: InstanceAPI;
    }
}

interface RampOptions {
    loadDefaultFixtures?: boolean;
    loadDefaultEvents?: boolean;
}

//app.config.globalProperties.$const = CONSTANTS;

export class InstanceAPI {
    readonly fixture: FixtureAPI;
    readonly panelAPI: PanelAPI;
    readonly event: EventAPI;
    readonly mapActions: MapAPI;

    // FIXME: temporarily store map in global, remove line below when map API is complete
    // set by the `map/esri-map.vue` file
    map!: RampMap;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {Vue}
     * @memberof InstanceAPI
     */
    readonly $vApp;

    $vm: ComponentPublicInstance;

    private _isFullscreen: boolean;

    constructor(element: HTMLElement, configs?: RampConfigs, options?: RampOptions) {
        this.event = new EventAPI(this);
        const create = createRamp(element, this);
        this.$vApp = create.app;
        this.$vm = create.vm;

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI
        this.panelAPI = new PanelAPI(this);
        this.mapActions = new MapAPI(this);

        // TODO: decide whether to move to src/main.ts:createApp
        // TODO: store a reference to the even bus in the global store [?]
        if (configs !== undefined) {
            const defaultConfig = configs[Object.keys(configs)[0]];
            this.$vm.$store.set(ConfigStore.newConfig, defaultConfig !== undefined ? defaultConfig : undefined);

            // register first config for all available languages and then overwrite configs per language as needed
            this.$vm.$store.set(ConfigStore.registerConfig, { config: defaultConfig });
            for (const lang in configs) {
                this.$vm.$store.set(ConfigStore.registerConfig, { config: configs[lang], langs: [lang] });
            }
        }

        this._isFullscreen = screenfull.isEnabled && screenfull.isFullscreen && screenfull.element === this.$vApp._container;
        if (screenfull.isEnabled) {
            // update fullscreen flag as needed (getters don't work right with screenfull)
            screenfull.onchange(() => {
                // screnfull decrees a second enabled check
                this._isFullscreen = screenfull.isEnabled && screenfull.isFullscreen && screenfull.element === this.$vApp._container;
            });
        }

        // default missing options
        if (!options) {
            options = {};
        }

        // use strict check against false, as missing properties have default value of true.
        // run the default setup functions unless flags have been set to false.
        if (!(options.loadDefaultFixtures === false)) {
            this.fixture.addDefaultFixtures();
        }
        if (!(options.loadDefaultEvents === false)) {
            this.event.addDefaultEvents();
        }
    }

    // TODO: we probably need to expose other Vue global functions here like `set`, `use`, etc.
    /**
     * Retrieves a global Vue component by its id.
     *
     * @param {string} id
     * @returns {VueConstructor}
     * @memberof InstanceAPI
     */
    component(id: string): any;
    /**
     * Registers a global Vue component given an id and a constructor.
     *
     * @template VC
     * @param {string} id
     * @param {VC} vueConstructor
     * @returns {VC}
     * @memberof InstanceAPI
     */
    component<VC extends DefineComponent>(id: string, vueConstructor: any): VC;
    component(id: string, definition?: any) {
        if (definition) {
            const vc = this.$vApp.component(id, definition);
            this.event.emit(GlobalEvents.COMPONENT, id);
            return vc;
        }

        return this.$vApp.component(id);
    }

    /**
     * The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'.
     *
     * @readonly
     * @type string | null
     * @memberof InstanceAPI
     */
    get screenSize(): string | null {
        if (!this.$vApp || !this.$vApp._container) {
            return null;
        }
        const classList = (<Element>this.$vApp._container).classList;
        if (classList.contains('lg')) {
            return 'lg';
        } else if (classList.contains('md')) {
            return 'md';
        } else if (classList.contains('sm')) {
            return 'sm';
        } else {
            return 'xs';
        }
    }

    /**
     * Gets the config linked to the current language of the app.
     *
     * @memberof InstanceAPI
     */
    getConfig(): void {
        const language = this.$vm.$i18n.locale;
        return this.$vm.$store.get(ConfigStore.getActiveConfig, language);
    }

    /**
     * Sets the language of the app to the specified string (e.g. 'en' or 'fr').
     *
     * @param {string} language The locale string to switch to
     * @memberof InstanceAPI
     */
    setLanguage(language: string): void {
        this.$vm.$i18n.locale = language;
        const activeConfig = this.getConfig();
        console.log('active config: ', activeConfig);
        // TODO: do something with active config - reload map?
    }

    /**
     * The current locale string for the app.
     *
     * @readonly
     * @type string
     * @memberof InstanceAPI
     */
    get language(): string {
        return this.$vm.$i18n.locale;
    }

    /**
     * The current animation status.
     *
     * @readonly
     * @type string
     * @memberof InstanceAPI
     */
    get animate(): string {
        if (this.$vApp._container && this.$vApp._container.classList.contains('animation-enabled')) {
            return 'on';
        }
        return 'off';
    }

    /**
     * Toggles fullscreen for the app.
     *
     * @memberof InstanceAPI
     */
    toggleFullscreen(): void {
        if (screenfull.isEnabled) {
            // TODO: decide if we should add an event. theres already a `screefull.onchange`
            screenfull.toggle(this.$vApp._container || undefined);
        }
    }

    /**
     * Whether the app is fullscreen.
     *
     * @readonly
     * @type boolean
     * @memberof InstanceAPI
     */
    get isFullscreen(): boolean {
        return this._isFullscreen;
    }
}

/**
 * Creates a R4MP Vue application and mounts it on the provided element.
 *
 * @param {HTMLElement} element
 * @param {InstanceAPI} iApi R4MP API reference that controls this R4MP Vue application
 * @returns {Vue}
 */
function createRamp(element: HTMLElement, iApi: InstanceAPI) {
    const store = createStore();

    // passing the `iApi` reference to the root Vue component will propagate it to all the child component in this instance of R4MP Vue application
    // if several R4MP apps are created, each will contain a reference of its own API instance
    const app = createApp({});
    Object.assign(app.config.globalProperties, iApi);
    app.config.globalProperties.iApi = iApi;
    app.use(i18n);
    app.use(store);
    app.directive('focus-list', FocusList);
    app.directive('focus-item', FocusItem);

    app.component('tooltip', TooltipV);

    app.component('panel-screen', PanelScreenV);
    app.component('pin', PinV);
    app.component('close', CloseV);
    app.component('back', BackV);
    app.component('panel-options-menu', PanelOptionsMenuV);
    app.component('dropdown-menu', DropdownMenuV);

    app.component('fullscreen-nav-button', FullscreenNavV);
    app.component('home-nav-button', HomeNavV);
    app.component('mapnav-button', MapnavButtonV);

    app.component('divider', DividerV);
    app.component('appbar-button', AppbarButtonV);

    const vm = app.mount(element);

    return { app, vm };
}
