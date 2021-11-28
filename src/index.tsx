import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import reducer from './counter';
import { Provider } from "react-redux";
// import {log} from "util";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import Parent from "./components/Parent";
// import Hi from "./Hi";
// import Demo4 from './demo4';
import {Banner} from "./Demo5/Banner";
import {Chengpin} from "./Demo5/Chengpin";
import ErrorContainer from "./error/ErrorContainer";
import STORE from "./store";
//install redux-devtools-extension tools
import { composeWithDevTools } from 'redux-devtools-extension'
import Application from "./Application";


// const  logger = (store: any) => (next: any) => (action: any)  => {
//     console.log("dispatch -> " + action);
//     let result = next(action);
//     console.log("next state -> ", store.getState());
//     return result;
// }

// store.subscribe(() => {
//     console.log( store.getState() );
//     // render();
// });


// const render  = () =>
    ReactDOM.render(
        <Provider store={ STORE }>
            {/* <GetData /> */}
            {/* <GetData3 /> */}
            {/* <Father/> */}
            {/*<App />*/}
            {/*<User/>*/}
            {/*<Parent />*/}
            {/*<Hi />*/}
            {/*<Demo4 />*/}
            {/*<Banner />*/}
            {/*<Chengpin />*/}
            {/*<ErrorContainer />*/}
            <Application/>
        </Provider>,
        document.getElementById('root')
    );
// render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

