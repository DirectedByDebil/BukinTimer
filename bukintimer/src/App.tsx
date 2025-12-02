//@ts-check
import { useState, useEffect } from 'react';
import './index.css';

import {InstallationBlock} from './components/InstallationBlock/InstallationBlock';
import TimerBlock from './components/TimerBlock/TimerBlock';
import QuotesBlock from './components/QuotesBlock/QuotesBlock';
import {BackgroundShapes} from './components/BackgroundShapes/BackgroundShapes';
import {MusicPersonBlock} from './components/MusicPersonBlock/MusicPersonBlock';
import {TimeCount} from './timeLogic/timeCount';
import {persons} from './quotesLogic/persons';
import {selectRandomColor} from './effects/selectRandomColor';
import {Quotes} from './quotesLogic/Quotes';
import { IInitTimeRaw, toIInitTime, IInitTime } from './timeLogic/iInitTime';
import { DayState, IPerson } from './quotesLogic/iperson';
import { IQuote } from './quotesLogic/quote';

//? maybe better use useRef or useCallback
type Session = {
    interval?: number,
    dayProgress?: DayState,
    lastInitTimes?: IInitTimeRaw
};

const session: Session = {};

const timeCount = new TimeCount();

const quotes = new Quotes();
quotes.generateBaseQuotes();

function SetTime (times: IInitTimeRaw) {

    timeCount.onTimeSet(session, times);
    session.lastInitTimes = times;
}

document.addEventListener('visibilitychange', () => {
    
    if(document.hidden) {
        
        clearInterval(session.interval);
    }
    else if (session.lastInitTimes) {

        SetTime(session.lastInitTimes);

        const initTimes: IInitTime = toIInitTime(session.lastInitTimes);
        quotes.keys = {initTimes: initTimes};

        quotes.updateQuote();
    }
});

export default function App() {

    const [times, setTimes] = useState<IInitTimeRaw>({start: "00:00:00", lunch: "00:00:00", end:"00:00:00"});
    const [selectedPerson, setSelectedPerson] = useState<IPerson>(persons[0]);
    const [quote, setQuote] = useState<IQuote>(quotes.getBaseQuote());
    const [dayProgress, setDayProgress] = useState<DayState>('Before work');

    useEffect(() => {
    const randomColor = selectRandomColor();
    //TODO looks like sex, but maybe we can do this prettier
    document.documentElement.style.setProperty('--bg-color', randomColor);
    }, []);

    timeCount.setTimes = setTimes;
    timeCount.setDayProgress = setDayProgress;
    quotes.setQuote = setQuote;
    
    quotes.keys = {
        selectedPerson: selectedPerson,
        dayProgress: dayProgress
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
