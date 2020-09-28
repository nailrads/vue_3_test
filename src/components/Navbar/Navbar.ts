import {defineComponent, computed} from 'vue';
import router from '@/router';

export default defineComponent({
    setup() {
        const links: Readonly<Array<{ name: string, path: string }>> = [
            {
                name: 'Dashboard',
                path: 'dashboard'
            },
            {
                name: 'Technical Task',
                path: 'technicalTask'
            }
        ];

        const isActiveRoute = computed(_ => router.currentRoute.value.name);

        return {links, isActiveRoute}
    }
});
