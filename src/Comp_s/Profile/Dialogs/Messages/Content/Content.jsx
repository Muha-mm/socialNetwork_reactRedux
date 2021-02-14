import React from 'react'
import c from './Content.module.css'
import MessageComp from "./MessageComp/MessageComp";

const Content = (props) =>{
    let messageElements = props.messages
        .map((m) => <MessageComp message = {m.message} time = {m.time} id = {m.id} background = {m.background}/>)

    return (
        <div className={c.content}>
            {messageElements}
        </div>
    )
}
export default Content