import Time from "./time";
import Timer from "./timer";
import { has } from "lodash";

export default class TimeCount {
    
    constructor() {
        
        const isCountDown = true;

        this.#timers = 
        {
            start: new Timer(!isCountDown),
            lunch: new Timer(isCountDown),
            end: new Timer(isCountDown),

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
    }
    
    set setTimes(setTimes) {
        this.#setTimes = setTimes;
    }

    #setTimes;

    #timers = {};

    //TODO onLunchEnded
    //TODO onEnded

    onTimeSet (session, times) {

        if (!has(times, 'start') ||
            !has(times, 'lunch') ||
            !has(times, 'end')) {
            return;
        }

        const canStart = this.setTimers(times);
        
        if(!canStart) {
            return;
        }

        this.#setTimes(this.#timers.toString());

        if (session.interval) {
            
            clearInterval(session.interval);
        }
        
        session.interval = setInterval(this.startInterval.bind(this), 1000)
    }
    
    
    setTimers(times) {
        
        //TODO test with debugTime
        //! test with '15:00:00'
        //const testNow = "8:34:00";
        const dateNow = new Date();

        const nowTime = new Time(dateNow);
        const initTimes = [];

        for (const property in times) {    

            const initTime = new Time(times[property]);
            initTimes[property] = initTime;

            this.#timers[property].countTime(initTime, nowTime);
        }

        return nowTime.isBigger(initTimes.start) &&
        nowTime.isLesser(initTimes.end);
    }

    
    startInterval () {
        
        this.#timers.makeStep();
        
        this.#setTimes(this.#timers.toString());
    }
}



