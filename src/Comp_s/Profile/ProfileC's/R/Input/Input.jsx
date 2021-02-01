import React from 'react'
import c from './Input.module.css'
import {addPostActionCreator, changePostActionCreator}
        from "../../../../../Redux/Reducer/profilePageReducer";

const Input = (props) =>{

    let _handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {}
        else if (e.keyCode === 13) {
            addPost();
            e.preventDefault()
        }
    };

    let addPost = () =>{
        props.dispatch(addPostActionCreator())
    };
    let changePostText = (e) =>{
        props.dispatch(changePostActionCreator(e.target.value))
    };

    return (
    <div className={c.input}>
        <div className={c.d1}>
            <form>
                <textarea
                    onKeyDown={_handleKeyDown}
                    onChange={changePostText}
                    value={props.right.newPostText}
                    required
                    placeholder="share something..."
                />

                <button
                    onClick={addPost}
                    type="button"
                    className={c.add}>
                    {'>'}
                </button>

            </form>
        </div>
    </div>
)}
export default Input