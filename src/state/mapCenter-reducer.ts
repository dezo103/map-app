import {changeCoordinationFormat} from "../utils/changeCoordinationFormat";
import {splitString} from "../utils/splitString";

const initialState: any = [54.31, 26.86]

export const mapCenterReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case 'ADDRESS/SET-ADDRESS':
            return changeCoordinationFormat(splitString(action.location))
        default:
            return state
    }
}


