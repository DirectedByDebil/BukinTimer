//@ts-check
import { persons, personsQuotes, progressPersonsQuotes, dayQuotes } from "./persons.ts";
import { IQuote, generateQuote, getBaseQuote } from "./quote";
import { shuffle } from "../utils/myLodash.ts";
import {IKeys} from './ikeys.ts'
import { IPerson, IPersonDayProgressQuotes, IDayProgressQuotes, DayState } from "./iperson.ts";

export class Quotes {

    //#region setters

    set setQuote (setQuote: any) {
        this.#setQuote = setQuote;
    }

    //todo refactor this shit
    set keys (keys: IKeys) {
        const currentPerson = this.#keys.selectedPerson;
        
        Object.assign(this.#keys, keys);
        
        if (currentPerson && keys.selectedPerson !== currentPerson) {

            this.#quotes.length = 0;
            this.updateQuote();
        }
    }

    //#endregion

    #setQuote: any;

    #keys: IKeys = {};
    #baseQuotes: IQuote[] = [];
    #quotes: IQuote[] = [];


    generateBaseQuotes(){

        const now: Date = new Date();
        const day: number = now.getDay();

        const quotesObj = dayQuotes.find((item) => item.day === day);

        if (!quotesObj) {
            return;
        }

        const topic = quotesObj.topic;
        const jokes = shuffle(quotesObj.quotes);

        jokes.map((item)=>{
            
            this.#baseQuotes.push(
                generateQuote(topic, item)
            );
        });
    }

    getBaseQuote(): IQuote {

        if(this.#baseQuotes.length > 0) {
            return this.#baseQuotes[0];
        }
        else {
            return getBaseQuote();
        }
    }

    updateQuote(): void {

        if(this.#quotes.length === 0) {
            this.#addQuotesFromKeys();
        }
        
        const quote: IQuote = this.#quotes.pop() || getBaseQuote();
        this.#setQuote(quote);
    }
    
    
    #addQuotesFromKeys() {
        
        this.#quotes = this.#baseQuotes.concat(this.#getPersonQuotes());
        this.#quotes = this.#quotes.concat(this.#getProgressQuotes());
        
        this.#quotes = shuffle(this.#quotes);
    }

    #getPersonQuotes(): IQuote[] {

        const person = this.#keys.selectedPerson || persons[0];

        const personName = person.name;
        const personTopic = person.topic;

        const phrases = personsQuotes.find((person) => person.name === personName);
        if (!phrases) {
            return [];
        }

        const quotes: IQuote[] = [];
        phrases.quotes.map((item) => {

            quotes.push(
                generateQuote(personTopic, item)
            );
        });

        return quotes;
    }

    #getProgressQuotes(): IQuote[] {

        const person: IPerson = this.#keys.selectedPerson || persons[0];
        const personName: string = person.name;      

        const quotesObj: IPersonDayProgressQuotes | undefined = progressPersonsQuotes
            .find((item) => item.name === personName);
        
        if (!quotesObj) {
            return [];
        }

        const timeConditionKey: DayState = this.#keys.dayProgress || 'Before work';
        const phrases: IDayProgressQuotes | undefined = quotesObj.quotes
            .find((quote) => quote.dayState === timeConditionKey);

        if (!phrases) {
            return [];
        }

        const quotes: IQuote[] = [];
        const topic = phrases.topic;

        phrases.quotes.map((item) => {

            quotes.push(
                generateQuote(topic, item)
            );
        });

        return quotes;
    }
}