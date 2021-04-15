import VueI18n from 'vue-i18n';
import messages from './lang.csv';

export type I18nComponentOptions = {
    messages?: VueI18n.LocaleMessages<VueI18n.VueMessageType>;
    dateTimeFormats?: VueI18n.IntlDateTimeFormats;
    numberFormats?: VueI18n.IntlNumberFormats;
    sharedMessages?: VueI18n.LocaleMessages<VueI18n.VueMessageType>;
};

const fallbackLocale = 'en';

// get the language of the page from the root `html` node
const locale: string = document.documentElement.getAttribute('lang') || fallbackLocale;

export const i18n = VueI18n.createI18n({
    locale,
    fallbackLocale,
    messages,
});
