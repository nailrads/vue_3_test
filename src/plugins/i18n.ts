import {ref, provide, inject, watch} from 'vue';

interface ILocaleConfig {
    locale: string
    messages: Record<string, Record<string, string>>
}

const createI18n = (config: ILocaleConfig) => ({
    locale: ref(config.locale),
    messages: config.messages,
    $t(key: string) {
        return this.messages[this.locale.value][key];
    }
});

const i18nSymbol = Symbol();

export const provideI18n = (i18nConfig: ILocaleConfig) => {
    const i18n = createI18n(i18nConfig);
    provide(i18nSymbol, i18n);
};

export interface II18n {
    locale: { value: ILocaleConfig['locale'] }
}

export const useI18n = (): { locale: { value: string } } | unknown => {
    const i18n = inject(i18nSymbol);
    if (!i18n) {
        throw new Error('No i18n provided!!!');
    }
    return i18n;
};
