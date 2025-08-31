import './installationblock.css'
import { useState } from 'react';

export default function InstallationBlock( { onTimeChanged} ){

    const[startTime, setStartTime] = useState('08:00:00');
    const[lunchTime, setLunchTime] = useState('13:00:00');
    const[endTime, setEndTime] = useState('17:00:00');

    const handleStart = () => {

        const times = {

            start: startTime,

            lunch: lunchTime,

            end: endTime
        };

        onTimeChanged(times);
    };


    const inputs =[
        {label: 'Начало смены', value: startTime, onChange: setStartTime},
        {label: 'Обед', value: lunchTime, onChange: setLunchTime},
        {label: 'Конец смены', value: endTime, onChange: setEndTime}
    ]
    

    return(
        <div className='install-block'>
            {inputs.map((input, index) => (
                <div className='install-block__container' key={index}>
                <label className='install-block__label'>{input.label}</label>
                <input 
                    type="time" 
                    step={2}
                    value={input.value}
                    onChange={(e) => input.onChange(e.target.value)}
                    className='install-block__timer'></input>
                </div>
            ))}

            <button className='install-block__startButton' onClick={handleStart}>
                    <p className='text'>Старт</p>
            </button>
        </div>
    )   
}