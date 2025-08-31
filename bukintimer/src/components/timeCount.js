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

                    start: this.start.time.toString(),
                    lunch: this.lunch.time.toString(),
                    end: this.end.time.toString()
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
    
        if (this.#startedInterval) {
            
            clearInterval(this.#startedInterval);
        }
        
        this.#startedInterval = setInterval(this.startInterval.bind(this), 100)
    };
    
    
    setTimers(times) {
        
        //TODO test with debugTime
        const dateNow = new Date();

        const timeNow = new Time(dateNow);

        for (const property in times) {    

            const initTime = new Time(times[property]);

            const actualTime = timeNow.getDiff(initTime);

            this.#timers[property].time = actualTime;
        }

        this.#setTimes(this.#timers.toString());
    };

    
    startInterval () {
        
        this.#timers.makeStep();
        
        this.#setTimes(this.#timers.toString());
    };
}



