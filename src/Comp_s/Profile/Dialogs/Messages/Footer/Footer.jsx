import React from 'react'
import c from './Footer.module.css'
import {changeMessageTextActionCreator, sendMessageActionCreator}
            from "../../../../../Redux/Reducer/dialogsPageReducer";

const Footer = (props) =>{
    //actionCreators


    let sendMessage = () =>{
        props.dispatch(sendMessageActionCreator());
    };
    let change = (e) =>{
        props.dispatch(changeMessageTextActionCreator(e.target.value))
    };

    let _handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {}
        else if (e.keyCode === 13) {
            sendMessage();
            e.preventDefault()
        }
    }

    return (
        <div className={c.footer}>
            <hr/>
            <div className={c.input}>
                <div className={c.d1}>
                    <form>
                        <textarea
                            onKeyDown={_handleKeyDown}
                            onChange={change}
                            value={props.newMessageText}
                            required
                            placeholder="enter message..." />
                        <button
                            onClick={sendMessage}
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