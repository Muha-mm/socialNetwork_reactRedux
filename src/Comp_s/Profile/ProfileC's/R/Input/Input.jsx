import React from 'react'
import c from './Input.module.css'
const Input = () =>{
    return (
    <div className={c.input}>
        <div className={c.d1}>
            <form>
                <textarea required type="email" className={c.vvod} placeholder="share something..." />
                    <button type="button" className={c.add}>></button>
            </form>
        </div>
    </div>
)}
export default Input