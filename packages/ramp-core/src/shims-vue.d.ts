/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '*lang.csv' {
    import { LocaleMessages, VueMessageType } from 'vue-i18n';
    const content: LocaleMessages<VueMessageType>;
    export default content;
}

declare module '*.csv' {
    const content: any;
    export default content;
}

declare module '*.xsl' {
    const content: any;
    export default content;
}
