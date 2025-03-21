export declare const useDrawStore: import('pinia').StoreDefinition<"draw", import('pinia')._UnwrapAll<Pick<{
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<never[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<null, null>;
    setActiveTool: (tool: string) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => null | undefined;
    updateGraphicGeometry: (id: string, geometry: any) => void;
}, "graphics" | "activeTool" | "selectedGraphicId">>, Pick<{
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<never[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<null, null>;
    setActiveTool: (tool: string) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => null | undefined;
    updateGraphicGeometry: (id: string, geometry: any) => void;
}, never>, Pick<{
    activeTool: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    graphics: import('../../../../vue/dist/vue.esm-bundler.js').Reactive<never[]>;
    selectedGraphicId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<null, null>;
    setActiveTool: (tool: string) => void;
    addGraphic: (graphic: any) => string;
    removeGraphic: (id: string) => void;
    selectGraphic: (id: string) => void;
    clearSelection: () => void;
    getSelectedGraphic: () => null | undefined;
    updateGraphicGeometry: (id: string, geometry: any) => void;
}, "setActiveTool" | "addGraphic" | "removeGraphic" | "selectGraphic" | "clearSelection" | "getSelectedGraphic" | "updateGraphicGeometry">>;
