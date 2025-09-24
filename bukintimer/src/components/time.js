export default class Time {

    hours = 0;
    minutes = 0;
    seconds = 0;

    constructor(timeInput) {

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
        else {

            const parsedTime = {
                hours: parseInt(timeInput.hours),
                minutes: parseInt(timeInput.minutes),
                seconds: parseInt(timeInput.seconds)
            };

            this.hours = !isNaN(parsedTime.hours)
                        ? parsedTime.hours
                        : 0;

            this.minutes = !isNaN(parsedTime.minutes)
                        ? parsedTime.minutes
                        : 0;

            this.seconds = !isNaN(parsedTime.seconds)
                        ? parsedTime.seconds
                        : 0;
        }
    }

    //#region Compare Time
    
    getDiff(time, isCountDown = false) {

        const diffTime = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };


        if(isCountDown) {

            const nowTotal = this.toSeconds();
            const initTotal = time.toSeconds();

            const diff = initTotal - nowTotal; 

            if (diff < 0) {

                diffTime.hours = 0;
                diffTime.minutes = 0;
                diffTime.seconds = 0;
            }
            else {

                diffTime.hours = parseInt(diff / 60 / 60);
                diffTime.minutes = parseInt(diff / 60 % 60);
                diffTime.seconds = parseInt(diff % 60);
            }
        }
        else {

            //basic timer
            diffTime.hours = 
                    this.hours >= time.hours
                    ? this.hours - time.hours
                    //todo maybe just 0
                    : 24 - time.hours + this.hours;
            
            diffTime.minutes =
                    this.minutes > time.minutes 
                    ? this.minutes - time.minutes
                    : 60 - time.minutes + this.minutes;
            
            diffTime.seconds = 
                this.seconds > time.seconds
                ? this.seconds - time.seconds
                : 60 - time.seconds + this.seconds;
        }

        return diffTime;
    }
    
    isBigger(time) {

        return (this.hours > time.hours) ||

        (this.hours === time.hours &&
            this.minutes > time.minutes) ||
        
            (this.hours === time.hours &&
            this.minutes === time.minutes &&
            this.seconds > time.seconds);
    }
    
    isLesser(time) {

        return (this.hours < time.hours) ||

        (this.hours === time.hours &&
            this.minutes < time.minutes) ||
        
            (this.hours === time.hours &&
            this.minutes === time.minutes &&
            this.seconds < time.seconds);
    }

    isZero() {

        return this.hours === 0 &&
                this.minutes === 0 &&
                this.seconds === 0;
    }

    //#endregion

    //#region Increase/Decrease Seconds
    
    increaseSeconds() {
        
        this.#addSeconds(1);
    }
    
    decreaseSeconds() {

        this.#addSeconds(-1);
    }
    
    //#endregion

    //#region to String/Seconds

    toString() {

        const hoursOutput = this.hours < 10 ? `0${this.hours}`: this.hours;
        const minutesOutput = this.minutes < 10 ? `0${this.minutes}`: this.minutes;
        const secondsOutput = this.seconds < 10 ? `0${this.seconds}`: this.seconds;

        return `${hoursOutput}:${minutesOutput}:${secondsOutput}`;
    }

    toSeconds() {

        return this.hours * 60 * 60 +  
                this.minutes * 60 +
                this.seconds;
    }

    //#endregion

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