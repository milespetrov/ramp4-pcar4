import { DrawTypeConfig } from '../api/drawApi';
export declare const useDrawStore: import('pinia').StoreDefinition<"draw", import('pinia')._UnwrapAll<Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[]>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: string) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
}, "graphics" | "supportedTypes" | "activeTool" | "selectedGraphicId">>, Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[]>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: string) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
}, never>, Pick<{
    supportedTypes: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[], DrawTypeConfig[] | {
        type: string;
        options?: Record<string, any>;
        enabled?: boolean;
    }[]>;
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<any[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | null, string | null>;
    setSupportedTypes: (types: DrawTypeConfig[]) => void;
    setActiveTool: (tool: string) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => any;
    updateGraphicGeometry: (id: string, geometry: any) => void;
}, "setSupportedTypes" | "setActiveTool" | "addGraphic" | "removeGraphic" | "selectGraphic" | "clearSelection" | "getSelectedGraphic" | "updateGraphicGeometry">>;
