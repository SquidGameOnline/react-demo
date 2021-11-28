import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore , applyMiddleware} from 'redux';
// import reducer from './counter';
import { Provider } from "react-redux";
import rootReducer from "./reducer";
// import {log} from "util";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Parent from "./components/Parent";
import Hi from "./Hi";
import Demo4 from './demo4';


// const  logger = (store: any) => (next: any) => (action: any)  => {
//     console.log("dispatch -> " + action);
//     let result = next(action);
//     console.log("next state -> ", store.getState());
//     return result;
// }

const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk))
store.subscribe(() => {
    console.log( store.getState() );
    // render();
});


// const render  = () =>
    ReactDOM.render(
        <Provider store={store}>
            {/* <GetData /> */}
            {/* <GetData3 /> */}
            {/* <Father/> */}
            {/*<App />*/}
            {/*<User/>*/}
            {/*<Parent />*/}
            {/*<Hi />*/}
            <Demo4 />
        </Provider>,
        document.getElementById('root')
    );
// render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

