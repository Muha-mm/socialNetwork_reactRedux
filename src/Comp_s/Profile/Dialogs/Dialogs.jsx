import React from 'react'
import c from './Dialogs.module.css'
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";
const Dialogs = (props) =>{
    return (
    <div className={c.dialogs}>
            <Dialog dialog = {props.dialogsPage.D}/>
            <Message
                newMessageText = {props.dialogsPage.newMessageText}
                message = {props.dialogsPage.M}
                addMessage={props.addMessage}
                changeMessageText = {props.changeMessageText}/>
    </div>
)}
export default Dialogs