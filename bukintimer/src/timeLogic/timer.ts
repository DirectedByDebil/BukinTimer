//@ts-check
import { Time } from "./time.ts";
import { IInitTimeRaw, IInitTime } from "./iInitTime.ts";

export class Timer {
    #isWorking: boolean = false;
    #isCountDown: boolean = false;    
    #isCountDownEnded: any;

    #time: Time = new Time();

    //todo maybe rename to onCountDownEnded
    constructor(isCountDown: boolean, isCountDownEnded?: any) {

        this.#isCountDown = isCountDown;
        this.#isCountDownEnded = isCountDownEnded;
    }

    
    countTime(initTime: Time, nowTime: Time) {

        const actualTime = nowTime.getDiff(initTime, this.#isCountDown);

        this.#time = Time.createFromITime(actualTime);

        if(this.#time.isZero()) {

            this.#isWorking = false;
            this.#isCountDownEnded();
        }
        else {

            this.#isWorking = true;
        }
    }


    //#region Set/Get Time

    set time (timeInput: any) {
        //todo check type here
        console.log("Check type here");
        //this.#time = new Time(timeInput);
    }
    
    get time (): string {
        
        return this.#time.toString();
    }
    
    //#endregion


    makeStep (): void {

        if (!this.#isWorking) {
            return;
        }

        if (this.#isCountDown) {

            this.#time.decreaseSeconds();
        }
        else {
            
            this.#time.increaseSeconds();
        }
    }
}


export class Timers {
    
    start:Timer;
    lunch:Timer;
    end:Timer;

    constructor (onLunchEnded: any, onWorkEnded: any) {

        const isCountDown: boolean = true;

        this.start = new Timer(!isCountDown);
        this.lunch = new Timer(isCountDown, onLunchEnded);
        this.end = new Timer(isCountDown, onWorkEnded);
    }

    toString(): IInitTimeRaw {

        const output: IInitTimeRaw = {

            start: this.start.time,
            lunch: this.lunch.time,
            end: this.end.time
        };

        return output
    }

    makeStep(): void {

        this.start.makeStep();
        this.lunch.makeStep();
        this.end.makeStep();
    }

    countTime(initTime: IInitTime, nowTime: Time): void {

        this.start.countTime(initTime.start, nowTime);
        this.lunch.countTime(initTime.lunch, nowTime);
        this.end.countTime(initTime.end, nowTime);
    }
}