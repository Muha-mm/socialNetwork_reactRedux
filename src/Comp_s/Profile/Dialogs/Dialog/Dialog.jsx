import React from 'react'
import c from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Search from "./Search/Search";
const Dialog = (props) =>{

    let dialogElements = props.dialog
        .map( (d) => <DialogItem name = {d.name} id = {d.id}/>)


    return(
        <div className={c.dialog}>
            <Search/>
            {dialogElements}
        </div>
    )
}
export default Dialog