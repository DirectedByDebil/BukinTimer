import { useState, useEffect } from 'react';
import './index.css';

import InstallationBlock from './components/InstallationBlock/InstallationBlock';
import TimerBlock from './components/TimerBlock/TimerBlock';
import QuotesBlock from './components/QuotesBlock/QuotesBlock';
import BackgroundShapes from './components/BackgroundShapes/BackgroundShapes';
import MusicPersonBlock from './components/MusicPersonBlock/MusicPersonBlock';
import TimeCount from './timeLogic/timeCount';
import {persons} from './quotesLogic/persons';
import selectRandomColor from './effects/selectRandomColor';
import Quotes from './quotesLogic/Quotes';

//? maybe better use useRef or useCallback
const session = {
    interval: null,
    lastInitTimes: {}
};

const timeCount = new TimeCount();

const quotes = new Quotes();
quotes.generateBaseQuotes();

function SetTime (times) {

    timeCount.onTimeSet(session, times);
    session.lastInitTimes = times;

    //todo update character phrase
}

document.addEventListener('visibilitychange', () => {
    
    if(document.hidden) {
        
        clearInterval(session.interval);
    }
    else {
        
        SetTime(session.lastInitTimes);
        
        //todo update character phrase
        quotes.keys = {initTimes: session.lastInitTimes};
    }
});

export default function App() {

    const [times, setTimes] = useState({start: "00:00:00", lunch: "00:00:00", end:"00:00:00"});
    const [selectedPerson, setSelectedPerson] = useState(persons[0]);
    const [quote, setQuote] = useState({topic:"Topic", joke:"Joke"});

    useEffect(() => {
    const randomColor = selectRandomColor();
    //TODO looks like sex, but maybe we can do this prettier
    document.documentElement.style.setProperty('--bg-color', randomColor);
    }, []);

    timeCount.setTimes = setTimes;
    quotes.setQuote = setQuote;
    
    quotes.keys = {
        selectedPerson: selectedPerson,
        times: times
    };

    return (
    <>
        <main>
        <BackgroundShapes/>
        <InstallationBlock
        onTimeChanged={SetTime}
        />
        
        <MusicPersonBlock 
        persons={persons}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        />
        <TimerBlock
        times={times}
        />
        <QuotesBlock 
        person={selectedPerson}
        quote={quote}
        onQuoteClick={quotes.updateQuote.bind(quotes)}
        />
        </main>
    </>
    )

}
