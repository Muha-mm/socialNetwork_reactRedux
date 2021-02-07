import React from 'react'
import {connect} from "react-redux";
import {changeMessageTextActionCreator, sendMessageActionCreator}
    from "../../../../Redux/Reducer/dialogsPageReducer";
import Message from "./Message";

let mapStateToProps = (state) =>({
    messages: state.dialogsPage.M,
    newMessageText: state.dialogsPage.newMessageText
})

let mapDispatchToProps = (dispatch) =>({
    sendMessage: ()=>{dispatch(sendMessageActionCreator())},
    changeMessageText: (e)=>{dispatch(changeMessageTextActionCreator(e.target.value))},
    handleKeyDown:(e)=>
    { if (e.key === 'Enter' && e.shiftKey) {}
    else if (e.keyCode === 13) {
        dispatch(sendMessageActionCreator());
        e.preventDefault()}
    }
})

    let MessageConteiner = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageConteiner