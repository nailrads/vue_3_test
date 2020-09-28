import TDate from './TDate';

export enum OperationType {
    PLOWING = 0,        // Вспашка
    BOWLING = 1,        // Боронование
    FERTILIZATION = 2,  // Внесение удобрений
    WATERING = 3,       // Полив
    RIGGING = 4,        // Прикатывание
    HARVESTING = 5      // Сбор урожая
}

export enum Assessment {
    EXCELLENT = 0,      // Отлично
    SATISFACTORILY = 1,	// Удовлетворительно
    BADLY = 2           // Плохо
}

export enum MonthName {
    JANUARY = 1,
    FEBRUARY = 2,
    MARCH = 3,
    APRIL = 4,
    MAY = 5,
    JUNE = 6,
    JULE = 7,
    AUGUST = 8,
    SEPTEMBER = 9,
    OCTOBER = 10,
    NOVEMBER = 11,
    DECEMBER = 12
}

export default class Operation {
    id?: string | null;             // ID Операции
    type: OperationType;            // Тип операции
    date: TDate;                    // Дата проведения операции
    area: number;                   // Площадь проведения операции (Га)
    comment?: string | null;        // Комментарий
    assessment?: Assessment | null; // Оценка качества проведенной операции

    constructor (args: Operation) {
        const {
            id = null,
            type,
            date,
            area,
            comment = null,
            assessment = null
        } = args;
        this.id = id;
        this.type = type;
        this.date = new TDate(date);
        this.area = area;
        this.comment = comment;
        this.assessment = assessment;
    }
}
