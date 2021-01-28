import React from 'react'
import c from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = (props) =>{
    return(
        <NavLink to = {`/Dialogs/${props.id}`} className={c.dialogItem} activeClassName={c.active}>
            <div className={c.ava}>
                <img src="https://ai-cdr.ucoz.ru/kartinki_5/zayaccc.gif" alt=""/>
            </div>
            <div>
                <span className={c.name}>
                    {props.name}
                </span>
            </div>
            <hr/>
        </NavLink>
    )
}
export default DialogItem