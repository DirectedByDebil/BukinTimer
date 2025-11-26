export interface ITime {
    hours: number,
    minutes: number,
    seconds: number
}

export function toITime (timeInput: any) {

    const parsedTime: ITime = {
        hours: parseInt(timeInput.hours) || 0,
        minutes: parseInt(timeInput.minutes) || 0,
        seconds: parseInt(timeInput.seconds) || 0
    };

    return parsedTime;
}