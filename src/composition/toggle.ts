import {computed} from 'vue';
import {useStore} from 'vuex';

export const useToggle = () => {
    const store = useStore()
    const visible = computed(() => store.getters.detectVisibility)
    const toggle = () => store.commit('toggleVisibility', false)

    return {visible, toggle}
}
