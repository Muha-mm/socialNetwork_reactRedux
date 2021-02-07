import React from 'react'
import c from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import MessageConteiner from "./Messages/MessageConteiner";
const Dialogs = (props) =>{
    return (
    <div className={c.dialogs}>
            <Dialog dialog = {props.dialogsPage.D}/>
            <MessageConteiner/>
    </div>
)}
export default Dialogs