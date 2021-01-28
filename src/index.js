import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store, {addPost, addMessage, changePostText,changeMessageText} from "./store";


export let rerenderApp = () => {
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={store._state}
                 addPost = {addPost}
                 addMessage = {addMessage}
                 changePostText = {changePostText}
                 changeMessageText = {changeMessageText}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)};

rerenderApp();










reportWebVitals();
