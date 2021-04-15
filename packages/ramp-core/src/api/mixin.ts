import { App } from 'vue';

export default {
    beforeCreate(this: App) {
        const options = this.$options;

        if (options.iApi) {
            // if `iApi` option was set directly, assign it directly to the Vue instance as `$iApi`, so it will be accessible to components
            this.$iApi = options.iApi;
        } else if (options.parent && options.parent.$iApi) {
            // if the component has a parent with `iApi` assigned, copy it to the Vue instance as `$iApi`, so it can be accessed by components
            this.$iApi = options.parent.$iApi;
        }
    },
};
