import ru from '@/locales/intterra-ru-RU.json'
import en from '@/locales/intterra-en-US.json'

import {defineComponent} from 'vue';
import hotKeys from '@/composition/hotKeys';
import logout from '@/composition/logout';
import auth from '@/composition/auth';
import { provideI18n } from '@/plugins/i18n';

export default defineComponent({
    name: 'Core',
    setup(){
        provideI18n({
            locale: localStorage.getItem('lang') || 'ru',
            messages: {
                ru,
                en
            }
        });

        return {
            logout: hotKeys(logout, 'KeyQ', 'KeyE'),
            login: hotKeys(auth, 'KeyQ', 'KeyR')
        }
    }
});
