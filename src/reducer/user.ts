
import * as TYPES  from '../global/constants'

const user = ( state = {}, action: any ) => {
    switch ( action.type ) {
        case TYPES.ADD_USER:
            return {
                ...state,
                name: 'iwens'
            };
        default:
            return state;
    }
}

export default user;