import { weekDays, quotesByDayProgress } from "./quotesData";
import { persons, personsQuotes, progressPersonsQuotes, personsTimeConditions, DAY_PROGRESS } from "./persons";
import {extend, concat, shuffle} from "lodash"

export default class Quotes {

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

    #setQuote;

    #keys = {};
    #baseQuotes = [];
    #quotes = [];


    generateBaseQuotes(){

        const now = new Date();
        const day = now.getDay();

        const topic = weekDays[day];
        const jokes = shuffle(quotesByDayProgress[day]);

        if(!jokes) return;
        for (const item of jokes) {
            this.#baseQuotes.push(
                this.#generateQuote(topic, item)
            );
        }
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

        const person = this.#keys.selectedPerson || persons[0];

        const personName = person.name;
        const personTopic = person.topic;

        const phrases = personsQuotes[personName];
    
        const quotes = [];
        if (!phrases) return quotes;
        for (const item of phrases) {
            quotes.push(
                this.#generateQuote(personTopic, item)
            );
        }

        return quotes;
    }

    #getProgressQuotes() {

        const person = this.#keys.selectedPerson || persons[0];
        const personName = person.name;
        const timeConditionKey = this.#keys.dayProgress || DAY_PROGRESS.BEFORE_WORK;
        
        const quotes = [];
        const phrases = progressPersonsQuotes[personName][timeConditionKey];
        const timeCondition = personsTimeConditions[personName][timeConditionKey] || timeConditionKey;

        if (!phrases) return quotes;
        for (const item of phrases) {            
            quotes.push(
                this.#generateQuote(timeCondition, item)
            );
        }

        return quotes;
    }

    #generateQuote(topic, joke) {
        return {topic: topic, joke: joke};
    }
}