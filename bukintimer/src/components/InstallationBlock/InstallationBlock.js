import './installationblock.css'
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function InstallationBlock( { onTimeChanged} ){

    //todo debug overnight shift
    
    const[startTime, setStartTime] = useLocalStorage('startTime', '18:00:00');
    const[lunchTime, setLunchTime] = useLocalStorage('lunchTime', '23:40:00');
    const[endTime, setEndTime] = useLocalStorage('endTime', '07:00:00');
    /*
    
    const[startTime, setStartTime] = useLocalStorage('startTime', '09:00:00');
    const[lunchTime, setLunchTime] = useLocalStorage('lunchTime', '14:00:00');
    const[endTime, setEndTime] = useLocalStorage('endTime', '18:00:00');
    */

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