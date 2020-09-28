import router from '@/router';
import {ACCESS_TOKEN_NAME} from '@/settings/base';

const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    router.push({name: 'intro'})
};

export default logout
