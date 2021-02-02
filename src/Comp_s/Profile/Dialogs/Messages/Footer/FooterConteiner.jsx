import React from 'react'
import {changeMessageTextActionCreator, sendMessageActionCreator}
    from "../../../../../Redux/Reducer/dialogsPageReducer";
import Footer from "./Footer";

const FooterConteiner = (props) =>{
    let sendMessage = () =>{
        props.store.dispatch(sendMessageActionCreator());
    };
    let changeMessageText = (e) =>{
        props.store.dispatch(changeMessageTextActionCreator(e.target.value))
    };

    let handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {}
        else if (e.keyCode === 13) {
            sendMessage();
            e.preventDefault()
        }
    }

    return (
        <div>
            <Footer onHandleKeyDown = {handleKeyDown}
                    onChange = {changeMessageText}
                    onSendMessage = {sendMessage}
                    newMessageText = {props.newMessageText}
            />
        </div>
    )}
export default FooterConteiner