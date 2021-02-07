import React from 'react'
import c from './Right.module.css'
import Inf from "./Inf/Inf";
import Photos from "./Photos/Photos";
import RightCount from "./Inf/RightCount/RightCount";
import PostsConteiner from "./Posts/PostsConteiner";
const Right = () =>{
    return (
    <div className={c.right}>
        <RightCount/>
        <Inf/>
        <Photos/>
        <PostsConteiner/>
    </div>
)}
export default Right