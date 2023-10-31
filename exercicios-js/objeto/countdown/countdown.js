export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }

    get _futureDate() {
        return new Date(this.futureDate)
    }

    get atualDate() {
        return new Date()
    }

    get _timeStampiDiff() {
        return this._futureDate.getTime() - this.atualDate.getTime();
    }

    get days() {
        return Math.floor(this._timeStampiDiff / (24 *60 * 60 * 1000))
    }

    get hours() {
        return  Math.floor(this._timeStampiDiff / (60 * 60 * 1000))
    }

    get minutes() {
        return  Math.floor(this._timeStampiDiff / (60 * 1000))
    }

    get seconds() {
        return  Math.floor(this._timeStampiDiff / 1000)
    }

    get total() {
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
}


//console.log(Countdown._futureDate())