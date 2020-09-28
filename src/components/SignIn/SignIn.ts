import {defineComponent} from 'vue';
import auth from '@/composition/auth';
import {useI18n} from '@/plugins/i18n';

export default defineComponent({
    name: 'SignIn',
    setup() {
        const i18n = useI18n() as any;

        const switchLanguage = () => {
            i18n.locale.value = i18n.locale.value === "en" ? "ru" : "en";
            localStorage.setItem('lang', i18n.locale.value)
        };

        return {
            i18n,
            switchLanguage,
            auth
        };
    }
});
