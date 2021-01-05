import React from 'react'
import c from './Dialogs.module.css'
import Message from "./Messages/Message";
import Dialogs_item from "./Dialogs_item/Dialogs_item";
const Dialogs = () =>{
    return (
    <div className={c.dialogs}>

        <div className={c.dialogs_item}>
            <Dialogs_item/>
        </div>

        <div className={c.messages}>
            <Message/>
        </div>

    </div>
)}
export default Dialogs