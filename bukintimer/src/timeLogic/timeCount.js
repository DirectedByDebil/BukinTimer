import Time from "./time";
import Timer from "./timer";
import { dispatchEventUtil } from "../utils/eventUtils";
import { DAY_PROGRESS } from "../quotesLogic/persons";

const TIME_SPEED = 1000;

export default class TimeCount {
    
    constructor() {
        const isCountDown = true;

        const onLunchEnded = this.#onLunchEnded.bind(this);
        const onWorkEnded = this.#onWorkEnded.bind(this);
        const onWorkStopped = this.#onWorkStopped.bind(this);

        this.#timers = {
            start: new Timer(!isCountDown, null, onWorkStopped),
            lunch: new Timer(isCountDown, onLunchEnded, onWorkStopped),
            end: new Timer(isCountDown, onWorkEnded, onWorkStopped),

            toString() {
                return {
                    start: this.start.time,
                    lunch: this.lunch.time,
                    end: this.end.time
                };
            },

            makeStep() {

                this.start.makeStep();
                this.lunch.makeStep();
                this.end.makeStep();
            }
        };

        this.#timers.start.id = 'start';
        this.#timers.lunch.id = 'lunch';
        this.#timers.end.id = 'end';
    }

    //#region Setters
    set setTimes(setTimes) {
        this.#setTimes = setTimes;
    }

    set setDayProgress(setDayProgress) {
        this.#setDayProgress = setDayProgress;
    }
    //#endregion

    #setTimes;
    #setDayProgress;
    #session = null;
    #timers = {};


    onTimeSet (session, times) {

        if (!times['start'] || !times['lunch'] || !times['end']) {
            return;
        }

        this.#session = session;
        const canStart = this.setTimers(times);
        
        if(!canStart) {
            //todo send notify
            alert("Something with time");
            return;
        }

        this.#setTimes(this.#timers.toString());

        if (session.interval) {
            
            clearInterval(session.interval);
        }
        
        session.interval = setInterval(this.startInterval.bind(this), TIME_SPEED)
    }
    
    
    setTimers(times) {
        
        const dateNow = new Date();
        const nowTime = Time.createFromDate(dateNow);
        
        //const dateNow = "02:00:00";
        //const nowTime = Time.createFromString(dateNow);

        const initTimes = [];

        for (const property in times) {    

            const initTime = Time.createFromString(times[property]);
            initTimes[property] = initTime;
        }
        
        const isOvernight = initTimes.start.isBigger(initTimes.end);
        
        if (!this.isValidRange(initTimes, isOvernight)) {
            
            if (typeof dispatchEventUtil === 'function') {

                dispatchEventUtil('Timer', 'initTimesChanges', {
                    message: 'Введите корректный интервал времени!'
                });
            }

            return false;
        }

        let normalizedNow = nowTime;
        if (isOvernight && nowTime.isLesser(initTimes.start)) {
            normalizedNow = Time.createFromObject(nowTime);
            normalizedNow.hours += 24;
        }

        const normalizedTimes = this.countTimes(normalizedNow, initTimes, isOvernight);
        
        const dayProgress = this.countDayProgress(normalizedNow, normalizedTimes);
        this.#setDayProgress(dayProgress);
        
        return this.canStart(normalizedNow, normalizedTimes, isOvernight);
    }

    //#region Set Timers Utils

    isValidRange (initTimes, isOvernight) {
        if (!initTimes || !initTimes.start || !initTimes.lunch || !initTimes.end) { return false; }

        if (isOvernight) {
            return initTimes.start.isLesser(initTimes.lunch) ||
                initTimes.lunch.isLesser(initTimes.end);
        }

        return initTimes.start.isLesser(initTimes.lunch) &&
            initTimes.lunch.isLesser(initTimes.end);
    }

    countTimes (nowTime, initTimes, isOvernight) {

        const times = {};
        Object.assign(times, initTimes);

        if (isOvernight) {
            
            if (initTimes.lunch.isLesser(initTimes.start)) {
                times.lunch = Time.createFromObject(initTimes.lunch);
                times.lunch.hours += 24;
            }
            times.end = Time.createFromObject(initTimes.end);
            times.end.hours += 24;
        }

        for (const property in times) {
            let time = times[property];
            this.#timers[property].countTime(time, nowTime);
        }

        return times;
    }

    canStart (nowTime, initTimes, isOvernight) {

        if (nowTime.isLesser(initTimes.start)) {

            this.#setDayProgress(DAY_PROGRESS.BEFORE_WORK);
            return false;
        }
        
        if (nowTime.isBigger(initTimes.end)) {
            
            this.#setDayProgress(DAY_PROGRESS.AFTER_WORK);
            return false;
        }
        
        return nowTime.isBigger(initTimes.start) &&
        nowTime.isLesser(initTimes.end);
    }

    countDayProgress (nowTime, initTimes) {

        if (nowTime.isLesser(initTimes.start)) {
            return DAY_PROGRESS.BEFORE_WORK;

        } else if (nowTime.isLesser(initTimes.lunch)) {
            return DAY_PROGRESS.BEFORE_LUNCH;

        } else if (nowTime.isLesser(initTimes.end)) {
            return DAY_PROGRESS.AFTER_LUNCH;

        } else if (nowTime.isBigger(initTimes.end)) {
            return DAY_PROGRESS.AFTER_WORK;
        }

        return DAY_PROGRESS.BEFORE_LUNCH;
    }

    //#endregion

    
    startInterval () {
        
        this.#timers.makeStep();
        
        this.#setTimes(this.#timers.toString());
    }

    //#region On Lunch/Work Ended
    #onLunchEnded(){

        if(this.#setDayProgress && typeof this.#setDayProgress === 'function'){
            this.#setDayProgress(DAY_PROGRESS.AFTER_LUNCH)

            if (typeof dispatchEventUtil === 'function') {

                dispatchEventUtil('Timer', 'dayProgressChanged', {
                    dayProgress: DAY_PROGRESS.AFTER_LUNCH,
                    message: 'Пора на обед!'
                });
            }
        }
    }
    
    #onWorkEnded() {
        
        if(this.#setDayProgress && typeof this.#setDayProgress === 'function'){
            this.#setDayProgress(DAY_PROGRESS.AFTER_WORK)

            if (typeof dispatchEventUtil === 'function') {

                dispatchEventUtil('Timer', 'dayProgressChanged', {
                    dayProgress: DAY_PROGRESS.AFTER_WORK,
                    message: 'Пора домой!'
                });
            }
        }
    }

    #onWorkStopped() {
        if (this.#session?.interval) {
            clearInterval(this.#session.interval);
            this.#session.interval = null;
            console.log('Work stopped, interval cleared');
        }
    }
    //#endregion
}