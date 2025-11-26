//@ts-check
import { Time } from "./time.ts"

export interface IInitTimeRaw {
    start: string,
    lunch: string,
    end: string
}

export interface IInitTime {
    start: Time,
    lunch: Time,
    end: Time
}


export function toIInitTime(initTimesRaw: IInitTimeRaw) {
    
    const initTimes: IInitTime = {
        start: Time.createFromString(initTimesRaw.start),
        lunch: Time.createFromString(initTimesRaw.start),            
        end: Time.createFromString(initTimesRaw.start)
    };

    return initTimes;
}