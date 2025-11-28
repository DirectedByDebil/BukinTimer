export interface IPerson {
    id: number,
    name: string,
    title: string,
    topic: string,
    img: string
}

export declare const persons: IPerson[];


//todo maybe IQuote[]
export interface IPersonQuotes {
    name: string,
    quotes: string[]
}


export type DayState = 'Before work' | 'Before lunch' | 'After lunch' | 'After work';

interface IDayProgressQuotes {
    dayState: DayState,
    topic: string,
    quotes: string[]
}

export interface IPersonDayProgressQuotes {
    name: string,
    quotes: IDayProgressQuotes[]
}