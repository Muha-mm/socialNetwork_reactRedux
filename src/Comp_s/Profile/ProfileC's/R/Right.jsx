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
        <Input right = {props.right} addPost={props.addPost} changePostText = {props.changePostText}/>
        <Posts postData = {props.right.postData}/>
    </div>
)}
export default Right