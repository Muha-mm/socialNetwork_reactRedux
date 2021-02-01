import React from 'react'
import c from './Message.module.css'
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
const Message = (props) =>{
    return (
        <div className={c.message}>
            <Header/>
            <Content message = {props.message}/>
            <Footer dispatch = {props.dispatch} newMessageText = {props.newMessageText}/>
        </div>
    )}
export default Message