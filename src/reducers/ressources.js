
import {
    ADD_RESSOURCE, PARSE_MESSAGE
} from '../actions/action-types';

const initialState = {
    ressourceList: [0],
    message: ""
}
export default function RessourcesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESSOURCE:
            return {
                ...state,
                ressourceList: [...state.ressourceList, state.ressourceList[state.ressourceList.length - 1] + 1]
            }
        case PARSE_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default: return state;
    }
}