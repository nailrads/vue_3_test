import {defineComponent} from 'vue';
import {useToggle} from '@/composition/toggle';

export default defineComponent({
    name: 'Modal',
    setup() {
        return {
            ...useToggle()
        }
    },
});
