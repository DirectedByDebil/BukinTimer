import './installationblock.css'

export default function InstallationBlock( {startTime, lunchTime, endTime, 
    onStartTimeChange, onLunchTimeChange, onEndTimeChange} ){

    const handleStart = () => {
        console.log('Старт с параметрами:', { startTime, endTime, lunchTime });
    };

    const inputs =[
        {label: 'Начало смены', value: startTime, onChange: onStartTimeChange},
        {label: 'Обед', value: lunchTime, onChange: onLunchTimeChange},
        {label: 'Конец смены', value: endTime, onChange: onEndTimeChange}
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