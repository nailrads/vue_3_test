import {defineComponent, PropType, ref, onMounted, computed} from 'vue';
import Operation, {OperationType, Assessment, MonthName} from '@/data/models/Operation';
import {useI18n} from '@/plugins/i18n';
import FieldService from '@/data/FieldService';
import {useToggle} from '@/composition/toggle';
import {useStore} from 'vuex';

const fieldService = new FieldService();

interface IFormSkeleton {
    readonly field: string
    readonly title: string
    readonly btnText: string
}

export default defineComponent({
    name: 'OperationForm',
    props: {
        formSkeleton: {
            type: Object as PropType<IFormSkeleton>,
            required: true,
        },
        data: Operation
    },
    setup({formSkeleton, data}, {emit}) {
        const store = useStore()
        const {toggle} = useToggle()
        const i18n = useI18n() as any;

        const assessmentTitle = 'Качество выполнения операции'
        const selectedAssessment = ref(0);
        const choiceAssessment = (index: number) => selectedAssessment.value = index;
        const assessmentButtons = [
            'отлично',
            'удовл.',
            'плохо',
        ]

        const operations = [
            OperationType.PLOWING,
            OperationType.BOWLING,
            OperationType.FERTILIZATION,
            OperationType.WATERING,
            OperationType.RIGGING,
            OperationType.HARVESTING,
        ]
        const getOperationName = (operation: number) => i18n.$t(OperationType[operation])

        const {title, btnText, field} = formSkeleton

        const unitText = 'поле'

        const fields = {
            operation: {
                label: 'Операция',
                placeholder: 'Выберите'
            },
            date: {
                label: 'ДАТА ПРОВЕДЕНИЯ',
                placeholder: 'dd.mm.yyyy'
            },
            count: {
                label: 'КОЛ-ВО ГА К ОБРАБОТКЕ',
                placeholder: 'Задайте'
            },
            comment: {
                label: null,
                placeholder: 'Комментарий к операции …'
            },
        }


        const defaultOperation = {
            id: null,
            type: OperationType.HARVESTING,
            date: {year: 2018, month: 9, day: 25},
            area: 85.5,
            comment: 'New Test Comment',
            assessment: Assessment.SATISFACTORILY
        }

        const newOperation = new Operation(defaultOperation);

        newOperation.area = Number(newOperation.area.toFixed())

        const date = ref('');
        const getDate = () => {
            const {day, month, year} = newOperation.date
            const addZero = (item: number) => item > 0 && item < 10 ? `0${item}` : item
            return `${addZero(day)}.${addZero(month)}.${year}`
        }
        date.value = getDate()

        const transformData = () => {
            const currentDate = date.value.split('.')
            const day = Number(currentDate[0])
            const month = Number(currentDate[1])
            const year = Number(currentDate[2])
            newOperation.date = {
                day,
                month,
                year
            }

            newOperation.assessment = selectedAssessment.value
        }

        const saveForm = (operation: Operation) => {
            emit('saveForm', JSON.parse(JSON.stringify(operation)))
            store.commit('showDetail', defaultOperation)
            toggle()
        }

        return {
            assessmentTitle,
            selectedAssessment,
            choiceAssessment,
            assessmentButtons,

            operations,
            getOperationName,

            newOperation,

            field,
            title,
            btnText,
            unitText,
            fields,

            transformData,
            date,
            saveForm
        }
    },
    methods: {
        async save() {
            this.transformData()
            await fieldService.saveOperation(this.newOperation)
            this.saveForm(this.newOperation)
        }
    },
});
