import { createStore , applyMiddleware} from 'redux';
import rootReducer from "../reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const STORE = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));

export default STORE;