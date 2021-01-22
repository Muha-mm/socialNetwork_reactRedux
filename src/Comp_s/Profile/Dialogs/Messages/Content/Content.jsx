import React from 'react'
import c from './Message.module.css'
const Message = () =>{
    return (
        <div className={c.message}>
            <header className={c.header}>
                <div className={c.name}>
                    Patrik
                </div>
            </header>
            <div className={c.message_1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt fringilla elementum.
            </div>
        </div>
    )}
export default Message