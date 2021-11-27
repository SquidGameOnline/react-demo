
import * as TYPES  from '../global/constants'

const counter = ( state = 1, action: any ) => {
    switch ( action.type ) {
        case TYPES.INC: return state + action.name;
        case TYPES.DEC: return state - action.name;
        default:
            return state;
    }
}

export default counter;