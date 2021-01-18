import React from 'react'
import c from './Right.module.css'
import Posts from "./Posts/Posts";
import Inf from "./Inf/Inf";
import Photos from "./Photos/Photos";
import Input from "./Input/Input";
import RightCount from "./Inf/RightCount/RightCount";
const Right = () =>{
    return (
    <div className={c.right}>
        <RightCount/>
        <Inf/>
        <Photos/>
        <Input/>
        <Posts/>
    </div>
)}
export default Right