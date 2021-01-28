import React from 'react'
import c from './Message.module.css'
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import {Route} from "react-router-dom";
const Message = (props) =>{
    return (
        <div className={c.message}>
            <Header/>
            <Content message = {props.message}/>
            <Footer addMessage = {props.addMessage}
                    changeMessageText = {props.changeMessageText}
                    newMessageText = {props.newMessageText}
            />                        {/*messageInput*/}

        </div>
    )}
export default Message