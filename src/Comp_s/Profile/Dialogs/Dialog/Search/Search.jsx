import React from 'react'
import c from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
const Dialog = () =>{
    return(
        <div className={c.dialog}>
            <input type="text" placeholder={'поиск'}/>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
        </div>
    )
}
export default Dialog