import React from 'react'
import c from './Left.module.css'
import Ava from "./Ava/Ava";
import Friends from "./Friends/Friends";
const Left = (props) =>{
    return (
    <div className={c.left}>
        <Ava/>
        <Friends sixFriends = {props.left.sixFriends}/>
    </div>
)}
export default Left