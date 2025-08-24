import './buttonselectperson.css';
import icon_person from './icon_person.png'

export default function ButtonSelectPerson( {onClick}) {
    return (
        <button 
            className="button-select-person"
            onClick={onClick}
            aria-label="Выбрать персонажа">
            <img src={icon_person} className='icon-button'></img>
        </button>
    );
}