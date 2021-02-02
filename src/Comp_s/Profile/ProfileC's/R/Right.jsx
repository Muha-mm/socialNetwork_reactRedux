import React from 'react'
import c from './Right.module.css'
import Posts from "./Posts/Posts";
import Inf from "./Inf/Inf";
import Photos from "./Photos/Photos";
import RightCount from "./Inf/RightCount/RightCount";
import InputConteiner from "./Input/InputConteiner";
const Right = (props) =>{
    return (
    <div className={c.right}>
        <RightCount/>
        <Inf/>
        <Photos/>
        <InputConteiner store = {props.store} right = {props.right}/>
        <Posts postData = {props.right.postData}/>
    </div>
)}
export default Right