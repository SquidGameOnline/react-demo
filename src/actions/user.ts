import * as TYPES from '../global/constants'

export  function addUser() {
    return {
        type: TYPES.ADD_USER
    }
};
 function fetchUser(user: any) {
    return {
        type: TYPES.FETCH_USER_SUCCESS,
        user
    }
}


export const getUserSuccess = () =>  {
    return (dispatch: any) => {
        fetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
            .then(res => res.json())
            .then((data: any) => {
                dispatch(fetchUser(data.chengpinDetails[0]))
            })
            .catch( (err: any) => {
                        console.log(err);
                    });
    }
}