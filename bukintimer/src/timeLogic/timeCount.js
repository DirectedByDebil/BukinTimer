import Time from "./time";
import Timer from "./timer";

const TIME_SPEED = 1;

export default class TimeCount {
    
    constructor() {
        
        const isCountDown = true;

        const onLunchEnded = this.#onLunchEnded.bind(this);
        const onWorkEnded = this.#onWorkEnded.bind(this);

        this.#timers = 
        {
            start: new Timer(!isCountDown),
            lunch: new Timer(isCountDown, onLunchEnded),
            end: new Timer(isCountDown, onWorkEnded),

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

    #timers = {};


    onTimeSet (session, times) {

        if (!times['start'] ||
            !times['lunch'] ||
            !times['end']) {
            return;
        }

        const canStart = this.setTimers(times);
        
        if(!canStart) {
            //todo send notify
            alert("Something with time");
            return;
        }

        this.#setTimes(this.#timers.toString());
        this.#setDayProgress('Before lunch');

        if (session.interval) {
            
            clearInterval(session.interval);
        }
        
        session.interval = setInterval(this.startInterval.bind(this), TIME_SPEED)
    }
    
    
    setTimers(times) {
        
        //TODO test with debugTime
        //! test with '15:00:00'
        //const dateNow = "8:34:00";
        //const dateNow = "13:00:00";
        const dateNow = new Date();

        const nowTime = new Time(dateNow);
        const initTimes = [];

        for (const property in times) {    

            const initTime = new Time(times[property]);
            initTimes[property] = initTime;

            this.#timers[property].countTime(initTime, nowTime);
        }

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

    
    startInterval () {
        
        this.#timers.makeStep();
        
        this.#setTimes(this.#timers.toString());
    }

    //#region On Lunch/Work Ended
    #onLunchEnded(){

        if(this.#setDayProgress && typeof this.#setDayProgress === 'function'){
            this.#setDayProgress('After Lunch')
            //todo notify
        }
    }
    
    #onWorkEnded() {
        
        if(this.#setDayProgress && typeof this.#setDayProgress === 'function'){
            this.#setDayProgress('After Work')
            //todo notify
        }
    }
    //#endregion
}



