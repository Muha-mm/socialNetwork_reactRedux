import React from 'react'
import c from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = () =>{
    return(
        <div className={c.dialogItem}>
            <NavLink to = '/Dialogs/1' activeClassName={c.active}>Patrik</NavLink>
        </div>
    )
}
export default DialogItem