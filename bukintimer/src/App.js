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

//? maybe better use useRef or useCallback
const session = {
    interval: null,
    lastInitTimes: {}
};

const timeCount = new TimeCount();

function SetTime (times) {

    timeCount.onTimeSet(session, times);
    session.lastInitTimes = times;
}

document.addEventListener('visibilitychange', () => {
    
    if(document.hidden) {
        
        clearInterval(session.interval);
    }
    else {
        
        SetTime(session.lastInitTimes);
        //todo update character phrase
    }
});

export default function App() {

    const [times, setTimes] = useState({start: "00:00:00", lunch: "00:00:00", end:"00:00:00"});
    const [selectedPerson, setSelectedPerson] = useState(persons[0]);

    useEffect(() => {
    const randomColor = selectRandomColor();
    //TODO looks like sex, but maybe we can do this prettier
    document.documentElement.style.setProperty('--bg-color', randomColor);
    }, []);

    timeCount.setTimes = setTimes;

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
        />
        </main>
    </>
    )

}
