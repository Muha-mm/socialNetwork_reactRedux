import React from 'react'
import {addPostActionCreator, changePostActionCreator}
    from "../../../../../Redux/Reducer/profilePageReducer";
import Input from "./Input";

const InputConteiner = (props) =>{

    let handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {}
        else if (e.keyCode === 13) {
            addPost();
            e.preventDefault()
        }
    };

    let addPost = () =>{
        props.store.dispatch(addPostActionCreator())
    };
    let changePostText = (e) =>{
        props.store.dispatch(changePostActionCreator(e.target.value))
    };

    return (
        <div>
            <Input
                newPostText = {props.right.newPostText}
                onAddPost = {addPost}
                onChangePostText = {changePostText}
                onHandleKeyDown = {handleKeyDown}
            />
        </div>
    )}
export default InputConteiner