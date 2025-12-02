//@ts-check
import {IInitTime} from '../timeLogic/iInitTime.ts'
import { IPerson, DayState } from './iperson.ts'

export interface IKeys {
    initTimes?: IInitTime,
    selectedPerson?: IPerson,
    dayProgress?: DayState
}