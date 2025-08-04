import './installationblock.css'
import React, {useState} from 'react'

export default function InstallationBlock(){
    const[startTime, setStartTime] = useState('08:00');
    const[lunchTime, setLunchTime] = useState('13:00');
    const[endTime, setEndTime] = useState('17:00');
    //const[isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        //setIsRunning(true);
        console.log('Старт с параметрами:', { startTime, endTime, lunchTime });
    };

    return(
        <div className='install-block'>
            <div className='install-block__container'>
                <label className='install-block__label'>Начало смены</label>
                <input type="time" 
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    //disabled={isRunning} 
                    className='install-block__timer'></input>
            </div>

            <div className='install-block__container'>
                <label className='install-block__label'>Обед</label>
                <input type="time" 
                    value={lunchTime}
                    onChange={(e) => setLunchTime(e.target.value)}
                    //disabled={isRunning} 
                    className='install-block__timer'></input>
            </div>

            <div className='install-block__container'>
                <label className='install-block__label'>Конец смены</label>
                <input type="time" 
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    //disabled={isRunning} 
                    className='install-block__timer'></input>
            </div>

            <button className='install-block__startButton'
                    onClick={handleStart}
                    //</div>disabled={isRunning}
                    >
                    <p className='text'>Старт</p>
            </button>
        </div>
    )   
}