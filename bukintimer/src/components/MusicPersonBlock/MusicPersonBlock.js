import ReactDOM from 'react-dom';
import './musicpersonblock.css';
import ButtonMusic from './ButtonMusic/ButtonMusic';
import ButtonSelectPerson from './ButtonSelectPerson/ButtonSelectPerson';
import ModalWindowPersons from '../ModalWindowPersons/ModalWindowPersons';
import { ButtonChangeTheme } from './ButtonChangeTheme/ButtonChangeTheme';

export default function MusicPersonBlock({ persons, selectedPerson, setSelectedPerson, onOpenModal, onCloseModal, isModalOpen }) {
    const handleOpenModal = () => {onOpenModal();};
    const handleCloseModal = () => {onCloseModal();};
    const handlePersonSelect = (person) => {setSelectedPerson(person); handleCloseModal();};

    return (
        <>
        <div className="music-person-block">
            <div className="music-person-block__button">
                <ButtonSelectPerson onClick = {handleOpenModal}/>
            </div>
            <div className="music-person-block__button">
                <ButtonMusic />
            </div>

            <div className="music-person-block__button">
                <ButtonChangeTheme />
            </div>
        </div>
            {isModalOpen && ReactDOM.createPortal(
                <ModalWindowPersons 
                            onClose = {handleCloseModal}
                            persons = {persons}
                            selectedPerson = {selectedPerson}
                            setSelectedPerson = {handlePersonSelect}
                            />,
                        document.body)}
        </>
    );
}