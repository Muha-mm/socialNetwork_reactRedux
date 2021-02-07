import React from 'react'
import c from './Input.module.css'

const Input = (props) =>{
    return (
    <div className={c.input}>
        <div className={c.d1}>
            <form>
                <textarea
                    onKeyDown={props.handleKeyDown}
                    onChange={props.changePostText}
                    value={props.newPostText}
                    required
                    placeholder="share something..."
                />

                <button
                    onClick={props.addPost}
                    type="button"
                    className={c.add}>
                    {'>'}
                </button>

            </form>
        </div>
    </div>
)}
export default Input