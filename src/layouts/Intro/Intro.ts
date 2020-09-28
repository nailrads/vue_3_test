import {defineComponent, computed} from 'vue';
import {useI18n} from '@/plugins/i18n';
import auth from '@/composition/auth';
import {makeLink} from '@/helpers/makeLink';

export default defineComponent({
    name: 'Intro',
    setup() {
        const github = 'https://github.com/hellboywar/test';
        const site = 'https://www.intterra.ru/';
        const i18n = useI18n() as any;

        const toggleLocal = (lang: string) => localStorage.setItem('lang', i18n.locale.value = lang);

        const description = computed(() => {
            return i18n.$t('INTRO_DESCRIPTION')
                .replace('Intterra', makeLink('Intterra', site))
                .replace('Github', makeLink('Github', github))
        });

        return {
            description,
            i18n,
            toggleLocal,
            auth
        };
    }
});
