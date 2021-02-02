import React from 'react'
import c from './Message.module.css'
import Header from "./Header/Header";
import Content from "./Content/Content";
import FooterConteiner from "./Footer/FooterConteiner";
const Message = (props) =>{
    return (
        <div className={c.message}>
            <Header/>
            <Content message = {props.message}/>
            <FooterConteiner store = {props.store} newMessageText = {props.newMessageText}/>
        </div>
    )}
export default Message