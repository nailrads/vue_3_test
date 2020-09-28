import router from '@/router';
import {ACCESS_TOKEN_NAME} from '@/settings/base';

const auth = () => {
    localStorage.setItem(ACCESS_TOKEN_NAME, Date.now().toString());
    router.push({name: 'main'})
};

export default auth
