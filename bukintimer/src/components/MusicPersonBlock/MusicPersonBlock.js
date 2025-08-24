import {useState} from 'react'
import './musicpersonblock.css';
import ButtonMusic from './ButtonMusic/ButtonMusic';
import ButtonSelectPerson from './ButtonSelectPerson/ButtonSelectPerson';
import ModalWindowPersons from '../ModalWindowPersons/ModalWindowPersons';

export default function MusicPersonBlock({ persons, selectedPerson, setSelectedPerson }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="music-person-block">
            <div className="music-person-block__button">
                <ButtonSelectPerson onClick={() => setIsModalOpen(true)}/>
            </div>
            <div className="music-person-block__button">
                <ButtonMusic />
            </div>
            {isModalOpen && <ModalWindowPersons 
                            onClose={() => setIsModalOpen(false)}
                            persons={persons}
                            selectedPerson={selectedPerson}
                            setSelectedPerson={setSelectedPerson}/>}
        </div>
    );
}