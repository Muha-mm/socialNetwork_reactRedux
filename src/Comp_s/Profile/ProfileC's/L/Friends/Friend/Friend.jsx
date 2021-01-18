import React from 'react'
import c from './Friends.module.css'
const Friend = () =>{
    return (
        <div className={c.friend}>
            <a href={'#'} className={c.item}>
                <div className={c.name}>Rachel</div>
            </a>
        </div>
    )}
export default Friend