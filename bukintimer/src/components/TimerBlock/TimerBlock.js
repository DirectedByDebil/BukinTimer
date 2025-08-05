import './timerblock.css'
import {useState} from 'react';

export default function TimerBlock(){
    const [time, setTime] = useState({
        sinceStart: '00:00:00',
        untilLunch: '00:00:00',
        untilEnd: '00:00:00'
    });

    return(
    <div className='timer-block'>
        <div className='timer-block__container'>

            <div className='timer-block__item'>
                <div className='timer-label'>С НАЧАЛА СМЕНЫ</div>
                <div className='timer-value'>{time.sinceStart}</div>
            </div>
            
            <div className='timer-block__item'>
                <div className='timer-label'>ДО ОБЕДА</div>
                <div className='timer-value'>{time.untilLunch}</div>
            </div>
            
            <div className='timer-block__item'>
                <div className='timer-label'>ДО КОНЦА СМЕНЫ</div>
                <div className='timer-value'>{time.untilEnd}</div>
            </div>
        </div>
    </div>
    )
}