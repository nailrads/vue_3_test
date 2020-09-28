import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
    name: 'Fields',
    setup() {
        const fields = [
            {
                name: '112',
                id: '112'
            },
            {
                name: 'test',
                id: 'test'
            }
        ];

        return {
            fields
        }
    }
});
