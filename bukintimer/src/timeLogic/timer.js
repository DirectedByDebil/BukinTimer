import Time from "./time";

export default class Timer {

    id = 'default';
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

        this.time = actualTime;
    }

    checkTimerStop() {

        if(this.#time && this.#time.isZero()) {

            this.#isWorking = false;
            this.#isCountDownEnded();
        }
        else {

            this.#isWorking = true;
        }
    }


    //#region Set/Get Time

    set time(timeInput) {
        
        if (this.#time) {
            this.#time.bindedTimer = null;
        }
        this.#time = new Time(timeInput);
        this.#time.bindedTimer = this.id;
        this.checkTimerStop();
    }
    
    get time() {
        
        return this.#time.toString();
    }
    
    //#endregion


    makeStep () {

        if (!this.#isWorking || !this.#time) {
            return;
        }

        if (this.#isCountDown) {

            this.#time.decreaseSeconds();
        }
        else {
            
            this.#time.increaseSeconds();
        }

        this.checkTimerStop();
    }
}
