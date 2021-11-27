import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
// import reducer from './counter';
import { Provider } from "react-redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer)
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
            <App />
            <User/>
        </Provider>,
        document.getElementById('root')
    );
// render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

