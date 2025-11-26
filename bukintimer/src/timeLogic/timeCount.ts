//@ts-check
import {Time} from "./time.ts";
import {Timer, Timers} from "./timer.ts";
import { IInitTimeRaw, IInitTime, toIInitTime } from "./iInitTime.ts";

export class TimeCount {
    
    constructor() {

        const onLunchEnded = this.#onLunchEnded.bind(this);
        const onWorkEnded = this.#onWorkEnded.bind(this);

        this.#timers = new Timers(onLunchEnded, onWorkEnded);
    }

    //#region Setters
    set setTimes(setTimes: any) {
        this.#setTimes = setTimes;
    }

    set setDayProgress(setDayProgress: any) {
        this.#setDayProgress = setDayProgress;
    }
    //#endregion

    #setTimes: any;
    #setDayProgress: any;

    #timers: Timers;

    //todo set interface for session
    onTimeSet (session: any, times: IInitTimeRaw) {

        const canStart = this.setTimers(times);
        
        if(!canStart) {
            return;
        }

        this.#setTimes(this.#timers.toString());
        this.#setDayProgress('Before lunch');

        if (session.interval) {
            
            clearInterval(session.interval);
        }
        
        session.interval = setInterval(this.startInterval.bind(this), 1000)
    }
    
    
    setTimers(times: IInitTimeRaw) {
        
        //TODO test with debugTime
        //! test with '15:00:00'
        //const testNow = "8:34:00";
        const dateNow = new Date();

        const nowTime = Time.createFromDate(dateNow);
        const initTimes: IInitTime = toIInitTime(times);

        this.#timers.countTime(initTimes, nowTime);

        if (nowTime.isLesser(initTimes.start)) {

            this.#setDayProgress('Before work');
            return false;
        }

        if (nowTime.isBigger(initTimes.end)) {

            this.#setDayProgress('After work');
            return false;
        }

        return nowTime.isBigger(initTimes.start) &&
        nowTime.isLesser(initTimes.end);
    }

    
    startInterval (): void {
        
        this.#timers.makeStep();
        
        this.#setTimes(this.#timers.toString());
    }

    //#region On Lunch/Work Ended
    #onLunchEnded(): void {

        if(this.#setDayProgress) {

            this.#setDayProgress('After Lunch')
        }
    }

    #onWorkEnded(): void {

        if(this.#setDayProgress){

            this.#setDayProgress('After Work')
        }
    }
    //#endregion
}



