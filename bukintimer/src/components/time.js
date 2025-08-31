export default class Time {

    hours;
    minutes;
    seconds;

    #hoursEnded = false;
    #minutesEnded = false;
    #endTime;

    constructor(timeInput) {

        //this.#endTime = new Time("00:00:00");


        if (timeInput instanceof Date) {

            this.hours = timeInput.getHours();
            this.minutes = timeInput.getMinutes();
            this.seconds = timeInput.getSeconds();
        }
        else if(typeof(timeInput) === "string") {

            const time = timeInput.split(':');

            this.hours = parseInt(time[0]);
            this.minutes = parseInt(time[1]);
            this.seconds = parseInt(time[2]);
        }
        else if (timeInput.hours &&
                timeInput.minutes &&
                timeInput.seconds) {
            
            this.hours = parseInt(timeInput.hours);
            this.minutes = parseInt(timeInput.minutes);
            this.seconds = parseInt(timeInput.seconds);
        }
    }

    getDiff(time) {

        const diffTime = {
            hours: this.hours > time.hours
            ? this.hours - time.hours
            : 24 - time.hours + this.hours,
            
            minutes: this.minutes > time.minutes 
            ? this.minutes - time.minutes
            : 60 - time.minutes + this.minutes,
            
            seconds: this.seconds > time.seconds
            ? this.seconds - time.seconds
            : 60 - time.seconds + this.seconds,
        };

        return new Time(diffTime);
    }


    //#region Increase/Decrease Seconds
    
    increaseSeconds() {
        
        this.#addSeconds(1);
    }
    
    decreaseSeconds() {

        this.#addSeconds(-1);
    }
    
    //#endregion


    toString() {

        const hoursOutput = this.hours < 10 ? `0${this.hours}`: this.hours;
        const minutesOutput = this.minutes < 10 ? `0${this.minutes}`: this.minutes;
        const secondsOutput = this.seconds < 10 ? `0${this.seconds}`: this.seconds;

        return `${hoursOutput}:${minutesOutput}:${secondsOutput}`;
    }

    //#region Add Seconds/Minutes/Hours
    
    #addSeconds(value) {

        if (Number.isInteger(value)) {

            this.seconds += value;

            const res = this.#clampValue(this.seconds, 0, 59);
            this.seconds = res.value;
/*
            if (this.#isCountDown &&
                this.#minutesEnded &&
                this.seconds === 0) {
                
                //TODO stop
            }
*/
            res.isOverClamped && this.#addMinutes(value);
        }
    }

    #addMinutes(value) {

        this.minutes += value;

        const res = this.#clampValue(this.minutes, 0, 59);
        this.minutes = res.value;
/*
        if (this.#isCountDown &&
            this.#hoursEnded &&
            this.minutes === 0) {

            this.#minutesEnded = true;
        }
        else {   
            res.isOverClamped && this.#addHours(value);
        }
*/
    }

    #addHours(value) {

        this.hours += value;

        const res = this.#clampValue(this.hours, 0, 23);
        this.hours = res.value;
/*
        if (this.#isCountDown && this.hours === 0) {

            this.#hoursEnded = true;
        }
*/
    }

    //#endregion


    #clampValue(value, min, max) {

        const result = {'isOverClamped': false, 'value': value};

        if (value > max) {

            result.value = min;
            result.isOverClamped = true;
        }
        else if(value < min) {

            result.value = max;
            result.isOverClamped = true;
        }

        return result;
    }

    #equals(time){

        return this.hours === time.hours &&
            this.minutes === time.minutes &&
            this.seconds === time.seconds;
    }
}