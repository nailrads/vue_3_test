import ru from './locales/intterra-ru-RU'
import VueI18n from 'vue-cli-plugin-i18n'
import Vue from 'vue';

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem('lang') || 'ru',
    messages: {
        ru
    }
})
