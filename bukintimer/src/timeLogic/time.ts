//@ts-check
import {ITime} from './itime.ts'

export class Time implements ITime {

    hours = 0;
    minutes = 0;
    seconds = 0;

    //#region constructors

    static createFromDate (timeInput: Date): Time {
        const time: Time = new Time();
        time.hours = timeInput.getHours();
        time.minutes = timeInput.getMinutes();
        time.seconds = timeInput.getSeconds();

        return time;
    }

    static createFromString (timeInput: string): Time {

        const timeParts: string[] = timeInput.split(':');

        const time: Time = new Time();
        time.hours = parseInt(timeParts[0]);
        time.minutes = parseInt(timeParts[1]);
        time.seconds = parseInt(timeParts[2]);

        return time;
    }

    static createFromITime( timeInput: ITime): Time {
        const time: Time = new Time();
        time.hours = timeInput.hours;
        time.minutes = timeInput.minutes;
        time.seconds = timeInput.seconds;

        return time;
    }

    //#endregion

    //#region Compare Time
    
    getDiff(time: Time, isCountDown: boolean = false) {

        const diffTime: ITime = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };


        if(isCountDown) {

            const nowTotal = this.toSeconds();
            const initTotal = time.toSeconds();

            const diff: number = initTotal - nowTotal; 

            if (diff < 0) {

                diffTime.hours = 0;
                diffTime.minutes = 0;
                diffTime.seconds = 0;
            }
            else {

                diffTime.hours = diff / 60 / 60;
                diffTime.minutes = diff / 60 % 60;
                diffTime.seconds = diff % 60;
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
    
    isBigger(time: ITime): boolean {

        return (this.hours > time.hours) ||

        (this.hours === time.hours &&
            this.minutes > time.minutes) ||
        
            (this.hours === time.hours &&
            this.minutes === time.minutes &&
            this.seconds > time.seconds);
    }
    
    isLesser(time: ITime): boolean {

        return (this.hours < time.hours) ||

        (this.hours === time.hours &&
            this.minutes < time.minutes) ||
        
            (this.hours === time.hours &&
            this.minutes === time.minutes &&
            this.seconds < time.seconds);
    }

    isZero(): boolean {

        return this.hours === 0 &&
                this.minutes === 0 &&
                this.seconds === 0;
    }

    //#endregion

    //#region Increase/Decrease Seconds
    
    increaseSeconds(): void {
        
        this.#addSeconds(1);
    }
    
    decreaseSeconds(): void {

        this.#addSeconds(-1);
    }
    
    //#endregion

    //#region to String/Seconds

    toString(): string {

        const hoursOutput = this.hours < 10 ? `0${this.hours}`: this.hours;
        const minutesOutput = this.minutes < 10 ? `0${this.minutes}`: this.minutes;
        const secondsOutput = this.seconds < 10 ? `0${this.seconds}`: this.seconds;

        return `${hoursOutput}:${minutesOutput}:${secondsOutput}`;
    }

    toSeconds(): number {

        return this.hours * 60 * 60 +  
                this.minutes * 60 +
                this.seconds;
    }

    //#endregion

    //#region Add Seconds/Minutes/Hours
    
    #addSeconds(value: number) {

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

    #addMinutes(value: number) {

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

    #addHours(value: number) {

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


    #clampValue(value: number, min: number = 0, max: number) {

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

    #equals(time: ITime){

        return this.hours === time.hours &&
            this.minutes === time.minutes &&
            this.seconds === time.seconds;
    }
}