import Time from "./time";

export default class Timer {

    id = 'default';
    #isWorking = false;
    #isCountDown = false;    
    #isCountDownEnded;
    #onWorkStopped;
    #time;

    constructor(isCountDown, isCountDownEnded, onWorkStopped) {
        this.#isCountDown = isCountDown;
        this.#isCountDownEnded = isCountDownEnded || (() => {});
        this.#onWorkStopped = onWorkStopped || (() => {});
    }
    
    countTime(initTime, nowTime) {

        const actualTime = nowTime.getDiff(initTime, this.#isCountDown);

        this.time = actualTime;
    }

    checkTimerStop() {
        if (this.#time && this.#time.isZero()) {
            this.#isWorking = false;
            this.#isCountDownEnded();

            if (this.id === 'end') {
                this.#onWorkStopped();
        }
        } else {
            this.#isWorking = true;
        }
    }

    //#region Set/Get Time

    set time(timeInput) {
        
        if (this.#time) {
            this.#time.bindedTimer = null;
        }
        this.#time = Time.createFromObject(timeInput);
        this.#time.bindedTimer = this.id;
        this.checkTimerStop();
    }
    
    get time() {
        
        return this.#time.toString();
    }
    
    get isWorking() {
        return this.#isWorking;
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
