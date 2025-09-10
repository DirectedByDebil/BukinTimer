import Time from "./time";
import Timer from "./timer";

export default class TimeCount {
    
    constructor(setTimes) {

        this.#setTimes = setTimes;

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
    };
    
    #setTimes;

    #startedInterval;

    #timers = {};

    //TODO onLunchEnded
    //TODO onEnded

    onTimeSet (times) {

        this.setTimers(times);
    

        //! check why this doesn't work
        if (this.#startedInterval) {
            
            clearInterval(this.#startedInterval);
        }
        
        this.#startedInterval = setInterval(this.startInterval.bind(this), 1000)
    };
    
    
    setTimers(times) {
        
        //TODO test with debugTime
        const dateNow = new Date();

        const nowTime = new Time(dateNow);

        for (const property in times) {    

            const initTime = new Time(times[property]);

            this.#timers[property].countTime(initTime, nowTime);
        }

        this.#setTimes(this.#timers.toString());
    };

    
    startInterval () {
        
        this.#timers.makeStep();
        
        this.#setTimes(this.#timers.toString());
    };
}



