import Time from "./time";

export default class Timer {

    #isWorking = false;
    #isCountDown = false;    
    #isCountDownEnded;

    #time;

    constructor(isCountDown, isCountDownEnded) {

        this.#isCountDown = isCountDown;
        this.#isCountDownEnded = isCountDownEnded;
    }

    
    countTime(initTime, nowTime) {

        const actualTime = nowTime.getDiff(initTime, this.#isCountDown);

        this.#time = new Time(actualTime);

        if(this.#time.isZero()) {

            this.#isWorking = false;
            //this.#isCountDownEnded();
        }
        else {

            this.#isWorking = true;
        }
    }


    //#region Set/Get Time

    set time(timeInput) {
        
        this.#time = new Time(timeInput);
    }
    
    get time() {
        
        return this.#time.toString();
    }
    
    //#endregion


    makeStep () {

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
