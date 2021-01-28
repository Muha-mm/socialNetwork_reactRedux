import React from 'react'
import c from './Input.module.css'

const Input = (props) =>{

    let newPostRef = React.createRef()

    let addPost = () =>{
        props.addPost(newPostRef.current.value);
    }

    let changePostText = () =>{
        props.changePostText(newPostRef.current.value);
    }

    return (
    <div className={c.input}>
        <div className={c.d1}>
            <form>
                <textarea
                    ref={newPostRef}
                    onChange={changePostText}
                    value={props.right.newPostText}
                    required
                    className={c.vvod}
                    placeholder="share something..."
                />

                <button
                    onClick={addPost}
                    type="button"
                    className={c.add}>>
                </button>

            </form>
        </div>
    </div>
)}
export default Input