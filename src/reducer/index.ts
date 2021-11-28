import {combineReducers} from "redux";
import counter from "./counter";
import user from "./user";
import auth from "./auth";

const rootReducer = combineReducers({
    counter,
    user,
    auth
});

export default rootReducer;