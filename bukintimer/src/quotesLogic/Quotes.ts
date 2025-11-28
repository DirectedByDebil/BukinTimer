import { weekDays, quotesByDayProgress } from "./quotesData";
import { persons, personsQuotes, progressPersonsQuotes, personsTimeConditions } from "./persons";
import { IQuote, generateQuote, getBaseQuote } from "./quote";

export class Quotes {

    //#region setters

    set setQuote (setQuote) {
        this.#setQuote = setQuote;
    }

    set keys(keys) {
        const currentPerson = this.#keys.selectedPerson;
        
        extend(this.#keys, keys);
        
        if (currentPerson && keys.selectedPerson !== currentPerson) {

            this.#quotes.length = 0;
            this.updateQuote();
        }
    }

    //#endregion

    #setQuote: any;

    #keys = {};
    #baseQuotes: IQuote[] = [];
    #quotes: IQuote[] = [];


    generateBaseQuotes(){

        const now = new Date();
        const day: number = now.getDay();

        const topic = weekDays[day];
        const jokes = shuffle(quotesByDayProgress[day]);

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
        
        this.#quotes = concat(this.#baseQuotes, this.#getPersonQuotes());
        this.#quotes = concat(this.#quotes, this.#getProgressQuotes());
        
        this.#quotes = shuffle(this.#quotes);
    }

    #getPersonQuotes() {

        const person = this.#keys.selectedPerson || persons[0];

        const personName = person.name;
        const personTopic = person.topic;

        const phrases = personsQuotes[personName];
    
        const quotes = [];
        phrases.map((item) => {

            quotes.push(
                generateQuote(personTopic, item)
            );
        });

        return quotes;
    }

    #getProgressQuotes() {

        const person = this.#keys.selectedPerson || persons[0];
        const personName = person.name;
        const timeConditionKey = this.#keys.dayProgress || 'Before work';
        
        const quotes = [];
        const phrases = progressPersonsQuotes[personName][timeConditionKey];
        const timeCondition = personsTimeConditions[personName][timeConditionKey];


        phrases.map((item) => {

            quotes.push(
                generateQuote(timeCondition, item)
            );
        });

        return quotes;
    }
}