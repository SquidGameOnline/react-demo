
import * as TYPES  from '../global/constants'
const initialState = {
    user: {},
    error: null,
    isFetching: true
};

const user = ( state = initialState, action: any ) => {

    switch ( action.type ) {
        case TYPES.FETCH_USER_SUCCESS:
            return {
                isFetching: false,
                user: action.user,
                error: null,
            };
        case TYPES.FETCH_USER_REQUEST:
            return {
                isFetching: true,
                user: null,
                error: {},
            };
        case TYPES.FETCH_USER_FAILURE:
            return {
                isFetching: false,
                user: {},
                error: action.error,
            }
        default:
            return state;
    }
}

export default user;