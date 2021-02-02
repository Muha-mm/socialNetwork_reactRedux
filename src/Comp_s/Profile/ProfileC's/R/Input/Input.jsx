import React from 'react'
import c from './Input.module.css'

const Input = (props) =>{
    return (
    <div className={c.input}>
        <div className={c.d1}>
            <form>
                <textarea
                    onKeyDown={props.onHandleKeyDown}
                    onChange={props.onChangePostText}
                    value={props.newPostText}
                    required
                    placeholder="share something..."
                />

                <button
                    onClick={props.onAddPost}
                    type="button"
                    className={c.add}>
                    {'>'}
                </button>

            </form>
        </div>
    </div>
)}
export default Input