import { IPerson } from "../../quotesLogic/iperson";

export declare function ModalWindowPersons({ onClose, persons, selectedPerson, setSelectedPerson }: {onClose: () => void, persons: IPerson[], selectedPerson: IPerson, setSelectedPerson: Dispatch<SetStateAction<IPerson>>});