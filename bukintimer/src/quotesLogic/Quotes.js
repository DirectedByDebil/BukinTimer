import { weekDays, quotesByDayProgress } from "./quotesData";
import { personsQuotes, progressPersonsQuotes } from "./persons";
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
        const jokes = shuffle(quotesByDayProgress[day]);

        jokes.map((item)=>{
            
            this.#baseQuotes.push(
                this.#generateQuote(topic, item)
            );
        });
    }

    getBaseQuote() {

        if(this.#baseQuotes.length > 0) {
            return this.#baseQuotes[0];
        }
        else {
            return {topic: "Тема шутки", joke: "Шутка"};
        }
    }

    updateQuote() {
        //todo check if character changed
        if(this.#quotes.length === 0) {
            
            this.#addQuotesFromKeys();
        }
        
        const quote = this.#quotes.pop();
        this.#setQuote(quote);
    }
    
    
    #addQuotesFromKeys() {
        
        this.#quotes = concat(this.#baseQuotes, this.#getPersonQuotes());
        this.#quotes = concat(this.#quotes, this.#getProgressQuotes());
        
        this.#quotes = shuffle(this.#quotes);
    }

    #getPersonQuotes() {

        // init values
        let personName = 'Gena';
        let personTopic = 'ЫЫЫЫЫыы';

        const person = this.#keys.selectedPerson;
        if (!isNil(person)) {

            personName = person.name;
            personTopic = person.topic;
        }

        const phrases = personsQuotes[personName];
    
        const quotes = [];
        phrases.map((item) => {

            quotes.push(
                this.#generateQuote(personTopic, item)
            );
        });

        return quotes;
    }

    #getProgressQuotes() {

        // init values
        let personName = 'Gena';
        let timeCondition = 'Before work';

        //todo this code duplicates
        //todo refactor
        if (!isNil(this.#keys.selectedPerson)) {

            personName = this.#keys.selectedPerson.name;
        }
        
        if(!isNil(this.#keys.dayProgress)){
            
            timeCondition = this.#keys.dayProgress;            
        }
        
        const quotes = [];
        const phrases = progressPersonsQuotes[personName][timeCondition];

        phrases.map((item) => {

            quotes.push(
                this.#generateQuote(timeCondition, item)
            );
        });

        return quotes;
    }

    #generateQuote(topic, joke) {
        return {topic: topic, joke: joke};
    }
}