import './modalwindowpersons.css'

export default function ModalWindowPersons({ onClose, persons, selectedPerson, setSelectedPerson }){

    const handleBackdropClick = (event) => {
        if (event.target.classList.contains('modalWindow__container')){
            onClose();
        }
    };

    return(
        <div className='modalWindow__container' onClick={handleBackdropClick}>
            <div className='modalWindow__content'>
                <span className='modalWindow__close-btn' onClick={onClose}>&times;</span>
                
                <div  className='modalWindow__list-container'>

                    <div className='modalWindow__list-persons'>
                        {persons.map(person => (
                            <div className="modalWindow__cardPerson" key={person.id}>
                            <label className="modalWindow__wrapper">
                                <input className="modalWindow__input" 
                                        type="radio" 
                                        checked={selectedPerson.id === person.id}
                                        onChange={() => setSelectedPerson(person)}/>
                                <span className="modalWindow__tile">
                                    <img className="modalWindow__img" src={person.img} alt={person.name}></img>
                                    <span className="modalWindow__label">{person.name}</span>
                                </span>
                            </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}