//@ts-check

export interface IQuote {
    topic: string,
    joke: string
}

export function generateQuote(topic: string, joke: string): IQuote {

    const quote: IQuote = {
        topic: topic,
        joke: joke
    };

    return quote;
}

export function getBaseQuote() {
    
    const baseQuote: IQuote = {
        topic: "Тема шутки",
        joke: "Шутка"
    };

    return baseQuote;
}