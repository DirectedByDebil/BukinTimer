import './timerblock.css'

export default function TimerBlock( { startTime, lunchTime, endTime} ){

    const default_values = [
        {label: 'С НАЧАЛА СМЕНЫ', value: startTime}, 
        {label: 'ДО ОБЕДА', value: lunchTime}, 
        {label: 'ДО КОНЦА СМЕНЫ', value: endTime}
    ]

    return(
    <div className='timer-block'>
        <div className='timer-block__container'>
            {default_values.map((default_value, index) => (
            <div className='timer-block__item' key={index}>
                <div className='timer-label'>{default_value.label}</div>
                <div className='timer-value'>{default_value.value}</div>
            </div>
            ))}
        </div>
    </div>
    )
}