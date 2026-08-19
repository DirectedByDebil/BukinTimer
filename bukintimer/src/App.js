import { useState, useEffect } from 'react';
import './index.css';

import { useLocalStorage } from './hooks/useLocalStorage';

import InstallationBlock from './components/InstallationBlock/InstallationBlock';
import TimerBlock from './components/TimerBlock/TimerBlock';
import QuotesBlock from './components/QuotesBlock/QuotesBlock';
import BackgroundShapes from './components/BackgroundShapes/BackgroundShapes';
import MusicPersonBlock from './components/MusicPersonBlock/MusicPersonBlock';
import TimeCount from './timeLogic/timeCount';
import {persons} from './quotesLogic/persons';
import selectRandomColor, {getThemes} from './effects/selectRandomColor';
import Quotes from './quotesLogic/Quotes';

//? maybe better use useRef or useCallback
const session = {
    interval: null,
    lastInitTimes: {},
    dayProgress: null
};

const timeCount = new TimeCount();

const quotes = new Quotes();
quotes.generateBaseQuotes();

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
        
        quotes.keys = {initTimes: session.lastInitTimes};
        quotes.updateQuote();
    }
});

export default function App() {

    const [times, setTimes] = useState({start: "00:00:00", lunch: "00:00:00", end:"00:00:00"});
    const [selectedPerson, setSelectedPerson] = useState(persons[0]);
    const [quote, setQuote] = useState(quotes.getBaseQuote());
    const [dayProgress, setDayProgress] = useState('Before work');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedTheme, setSelectedTheme] = useLocalStorage('bukinTheme', '');

    useEffect(() => {
        let themeId = selectedTheme;
    
        if (!themeId || themeId.length === 0) {
            const randomTheme = selectRandomColor();
            themeId = randomTheme && randomTheme.id;
        }

        const themes = getThemes();
        let color = themes[0] && themes[0].color;
        
        if (themeId) {
            const currentTheme = themes.find(theme => theme.id === themeId);
            color = currentTheme ? currentTheme.color : 'white'; 
            setSelectedTheme(themeId);
        }

        document.documentElement.style.setProperty('--bg-color', color);
    }, []);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

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
        <BackgroundShapes stopAnimation={isModalOpen}/>

        <InstallationBlock
        onTimeChanged={SetTime}
        />
        
        <MusicPersonBlock 
        persons={persons}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
        />

        <TimerBlock
        times={times}
        stopAnimation = {isModalOpen}
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
