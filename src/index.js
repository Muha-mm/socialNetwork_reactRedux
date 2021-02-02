import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/ReduxStore";


export let rerenderApp = (state) => {
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} store = {store}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)};

rerenderApp(store.getState());
store.subscribe(()=>{
    rerenderApp(store.getState())
});










reportWebVitals();
