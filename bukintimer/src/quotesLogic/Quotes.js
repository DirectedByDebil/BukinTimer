import { weekDays, quotesByDayProgress } from "./quotesData";
import { personsQuotes } from "./persons";
import {extend, isNil, concat, shuffle} from "lodash"

export default class Quotes {

    //#region setters

    set setQuote (setQuote) {
        this.#setQuote = setQuote;
    }

    set keys(keys) {
        
        extend(this.#keys, keys);
    }

    //#endregion

    #setQuote;

    #keys = {};
    #baseQuotes = [];
    #quotes = [];


    generateBaseQuotes(){

        const now = new Date();
        const day = now.getDay();

        const topic = weekDays[day];
        const jokes = quotesByDayProgress[day];

        jokes.map((item)=>{
            
            this.#baseQuotes.push(
                {topic: topic, joke: item}
            );
        });
    }

    updateQuote() {

        if(this.#quotes.length === 0) {
            
            this.#addQuotesFromKeys();
        }
        
        const quote = this.#quotes.pop();
        this.#setQuote(quote);
    }
    
    
    #addQuotesFromKeys() {
        
        //use character quotes
        const phrases = personsQuotes['Gena'];
    
        const quotes = [];
        phrases.map((item) => {
            quotes.push({topic: "Мудрость Гены", joke: item});
        });
        
        //? maybe better concat with #quotes
        this.#quotes = concat(this.#baseQuotes, quotes);
    
        //todo use progress-based quotes
    
        this.#quotes = shuffle(this.#quotes);
    }
}