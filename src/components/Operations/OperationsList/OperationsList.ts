import {defineComponent, computed, ref} from 'vue';
import {useStore} from 'vuex';
import router from '@/router';

import FieldService from '@/data/FieldService';

import Operation, {OperationType, Assessment, MonthName} from '@/data/models/Operation';
import TDate from '@/data/models/TDate';
import {useI18n} from '@/plugins/i18n';

import OperationDetail from '@/components/Operations/OperationDetail/OperationDetail.vue';
import {useToggle} from '@/composition/toggle';

const fieldService = new FieldService();

export default defineComponent({
    name: 'OperationsList',
    components: {
        OperationDetail
    },
    setup() {
        const operations = ref([])
        const operation = ref({})
        const fieldId = router.currentRoute.value.params.fieldId;
        const currentField = computed(() => `Операции на поле ${fieldId || ''}`);

        const {visible: showModal, toggle: toggleModal} = useToggle()

        const tabs = [
            {
                name: 'Запланированные операции',
                code: 'plannedByField'
            },
            {
                name: 'Выполненные операции',
                code: 'performedByField'
            }
        ];
        const i18n = useI18n() as any;

        const dateToStandart = ({day, month, year}: TDate) => `${day} ${i18n.$t(MonthName[month]).substr(0, 3)} ${year}`
        const getAssessment = (type: number) => i18n.$t(Assessment[type] || 'NOT_ASSESSMENT')
        const getOperationName = (type: number) => i18n.$t(OperationType[type])
        const getArea = (area: number) => `${area} (${i18n.$t('HECTARE')})`


        const store = useStore()
        const operationDetail = (operationDetail: Operation) => {
            operation.value = new Operation(operationDetail)
            store.commit('showDetail', operation.value)
            toggleModal()
        }

        return {
            currentField,
            tabs,
            dateToStandart,
            getAssessment,
            getArea,
            getOperationName,
            toggleModal,
            showModal,
            fieldId,
            operations,
            operation,
            operationDetail
        }
    },
    methods: {
        async getOperations() {
            // @ts-ignore
            this.operations = await fieldService.getOperations();
        },
        async update(operation: Operation) {
            // @ts-ignore
            this.operations.push(operation)
        }
    },
    async created() {
        // @ts-ignore
        await this.getOperations()
    }
});
