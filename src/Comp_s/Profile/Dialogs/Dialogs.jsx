import React from 'react'
import c from './Dialogs.module.css'
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";
const Dialogs = (props) =>{
    return (
    <div className={c.dialogs}>
            <Dialog dialog = {props.dialogsPage.D}/>
            <Message
                store = {props.store}
                newMessageText = {props.dialogsPage.newMessageText}
                message = {props.dialogsPage.M}
            />
    </div>
)}
export default Dialogs