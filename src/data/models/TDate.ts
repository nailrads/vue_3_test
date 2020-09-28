export default class TDate {
    year: number;   // Год
    month: number;  // Месяц 1 - 12
    day: number;    // День месяца 1 - 31

    constructor (args: TDate) {
        const { year, month, day } = args;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
