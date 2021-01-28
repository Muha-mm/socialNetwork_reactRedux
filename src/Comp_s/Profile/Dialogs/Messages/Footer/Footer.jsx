import React from 'react'
import c from './Footer.module.css'
const Footer = (props) =>{
    let messageText = React.createRef()
    let addMessage = () =>{
        props.addMessage(messageText.current.value);
    }

    let change = () =>{
        props.changeMessageText(messageText.current.value)
    }

    return (
        <div className={c.footer}>
            <hr/>
            <div className={c.input}>
                <div className={c.d1}>
                    <form>
                        <textarea
                            onChange={change}
                            value={props.newMessageText}
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