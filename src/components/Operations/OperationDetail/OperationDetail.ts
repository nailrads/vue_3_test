import {defineComponent, computed, ref, onMounted} from 'vue';
import router from '@/router';

import FieldService from '@/data/FieldService';

import Operation, {OperationType, Assessment, MonthName} from '@/data/models/Operation';
import {useI18n} from '@/plugins/i18n';

import Modal from '@/components/Modal/Modal.vue'
import OperationForm from '@/components/Operations/OperationForm/OperationForm.vue'
import {useStore} from 'vuex';

const fieldService = new FieldService();

export default defineComponent({
    name: 'OperationDetail',
    components: {
        Modal,
        OperationForm
    },
    props: {
        field: String
    },
    setup({field}, {emit}) {
        const i18n = useI18n() as any;
        const store = useStore()

        const operationData = computed(() => store.getters.getDetail)

        const saveForm = (newOperation: Operation) => emit('update', newOperation)

        const formSkeleton = {
            field,
            title: 'Редактирование операции',
            btnText: 'сохранить операцию',
        }
        return {
            operationData,
            formSkeleton,
            saveForm
        }
    }
});
