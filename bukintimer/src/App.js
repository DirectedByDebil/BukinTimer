import { useState, useEffect } from 'react';
import './index.css';

import InstallationBlock from './components/InstallationBlock/InstallationBlock';
import TimerBlock from './components/TimerBlock/TimerBlock';
import QuotesBlock from './components/QuotesBlock/QuotesBlock';
import BackgroundShapes from './components/BackgroundShapes/BackgroundShapes';
import MusicPersonBlock from './components/MusicPersonBlock/MusicPersonBlock';

import genaImg from "./assets/gena.png";
import patrickImg from "./assets/patrick.png";
import igorImg from "./assets/igor.png";

const persons = [
  { id: 1, name: "Гена Букин", img: genaImg },
  { id: 2, name: "Патрик Бейтман", img: patrickImg },
  { id: 3, name: "Игорь Войтенко", img: igorImg },
];


export default function App() {
  const[startTime, setStartTime] = useState('08:00:00');
  const[lunchTime, setLunchTime] = useState('13:00:00');
  const[endTime, setEndTime] = useState('17:00:00');
  const [selectedPerson, setSelectedPerson] = useState(persons[0]);

  //#TODO replace to some theme factory
  const selectRandomColor = () => {
    const colors = ['#B7DA5D', '#FF5170', '#EFB391', '#BC4878'];
    const color = Math.floor(Math.random() * colors.length);
    return colors[color];
  };
  
  
  useEffect(() => {
    const randomColor = selectRandomColor();
    //#TODO looks like sex, but maybe we can do this prettier
    document.documentElement.style.setProperty('--bg-color', randomColor);
  }, []);

  return (
    <>
      <main>
        <BackgroundShapes/>
        <InstallationBlock
        startTime={startTime}
        lunchTime={lunchTime}
        endTime={endTime}
        onStartTimeChange={setStartTime}
        onLunchTimeChange={setLunchTime}
        onEndTimeChange={setEndTime}
        />
        <MusicPersonBlock 
        persons={persons}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        />
        <TimerBlock
        startTime={startTime}
        lunchTime={lunchTime}
        endTime={endTime}
        />
        <QuotesBlock 
        person={selectedPerson}
        />
      </main>
    </>
  )
}