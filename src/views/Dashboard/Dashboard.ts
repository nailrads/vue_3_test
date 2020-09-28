import {defineComponent, computed} from 'vue';
import Fields from '@/components/Fields/Fields.vue';
import router from '@/router';

export default defineComponent({
    name: 'Dashboard',
    components: {
        Fields,
    },
    setup() {
        return {
            showListFields: computed(() => router.currentRoute.value.name === 'dashboard')
        }
    }
});
