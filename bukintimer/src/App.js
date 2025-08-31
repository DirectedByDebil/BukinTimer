import { useState, useEffect } from 'react';
import './index.css';
import InstallationBlock from './components/InstallationBlock/InstallationBlock';
import TimerBlock from './components/TimerBlock/TimerBlock';
import QuotesBlock from './components/QuotesBlock/QuotesBlock';
import TimeCount from './components/timeCount';

export default function App() {

    const [times, setTimes] = useState({start: "1", lunch: "2", end:"3"});


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


    const timeCount = new TimeCount(setTimes);
    
    const onTimeSet = timeCount.onTimeSet.bind(timeCount);

    return (
    <>
        <main>
        <InstallationBlock
        onTimeChanged={onTimeSet}
        />
        <TimerBlock
        times={times}
        />
        <QuotesBlock/>
        </main>
    </>
    )

}
