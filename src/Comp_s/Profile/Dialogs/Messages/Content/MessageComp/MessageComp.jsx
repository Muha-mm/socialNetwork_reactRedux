import React from 'react'
import c from './MessageComp.module.css'

const MessageComp = (props) =>{
    return(
        <div className={c.message}>
            <div className = {c.messageText}>
                {props.message}
                <span className={c.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default MessageComp