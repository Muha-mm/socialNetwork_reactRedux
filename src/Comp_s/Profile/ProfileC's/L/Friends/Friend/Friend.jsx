import React from 'react'
import c from './Friend.module.css'
const Friend = (props) =>{
    return (
        <div className={c.friend}>
            <a href={'#'} className={c.ava}>
                <img src='https://clck.ru/Stb3z' alt=""/>
                <div className={c.name}>{props.name}</div>
            </a>
        </div>
    )}
export default Friend