import React from 'react'
import c from './Footer.module.css'
import {rerenderApp} from "../../../../../index";
const Footer = (props) =>{
    let messageText = React.createRef()
    let addMessage = () =>{
        let newMessageText = messageText.current.value;
        props.addMessage(newMessageText);
        rerenderApp()
        messageText.current.focus()
        messageText.current.value = '';
    }

    return (
        <div className={c.footer}>
            <hr/>
            <div className={c.input}>
                <div className={c.d1}>
                    <form>
                        <textarea
                            ref={messageText}
                            required
                            className={c.vvod}
                            placeholder="enter message..." />
                        <button
                            onClick={addMessage}
                            type="button"
                            className={c.add}>
                            {'>'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )}
export default Footer