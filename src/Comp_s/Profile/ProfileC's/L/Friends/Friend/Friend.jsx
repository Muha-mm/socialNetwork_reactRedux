import React from 'react'
import c from './Friends.module.css'
import panda from './avaFri.jpg'
const Friend = () =>{
    return (
        <div className={c.friend}>
            <a href={'#'} className={c.ava}>
                <img src={panda} alt=""/>
                <div className={c.name}>Rachel</div>
            </a>
        </div>
    )}
export default Friend