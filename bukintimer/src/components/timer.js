import Time from "./time";

export default class Timer {

    #isCountDown = false;    
    #isCountDownEnded;

    #time;

    constructor(isCountDown, isCountDownEnded) {

        this.#isCountDown = isCountDown;
        this.#isCountDownEnded = isCountDownEnded;
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

        if (this.#isCountDown) {

            this.#time.decreaseSeconds();
        }
        else {
            
            this.#time.increaseSeconds();
        }
    }
}
