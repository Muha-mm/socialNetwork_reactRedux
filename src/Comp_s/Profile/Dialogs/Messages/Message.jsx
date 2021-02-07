import React from 'react'
import c from './Message.module.css'
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
const Message = (props) =>{
    return (
        <div className={c.message}>
            <Header/>
            <Content messages = {props.messages}/>
            <Footer
                handleKeyDown = {props.handleKeyDown}
                changeMessageText = {props.changeMessageText}
                sendMessage = {props.sendMessage}
                newMessageText = {props.newMessageText}
            />
        </div>
    )}
export default Message