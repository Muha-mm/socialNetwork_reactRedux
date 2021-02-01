import React from 'react'
import c from './Right.module.css'
import Posts from "./Posts/Posts";
import Inf from "./Inf/Inf";
import Photos from "./Photos/Photos";
import Input from "./Input/Input";
import RightCount from "./Inf/RightCount/RightCount";
const Right = (props) =>{
    return (
    <div className={c.right}>
        <RightCount/>
        <Inf/>
        <Photos/>
        <Input dispatch = {props.dispatch} right = {props.right}/>
        <Posts postData = {props.right.postData}/>
    </div>
)}
export default Right