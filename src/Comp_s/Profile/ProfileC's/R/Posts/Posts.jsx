import React from 'react'
import c from './Posts.module.css'
import Post from "./Post/Post";
const Posts = (props) =>{
    let postElements = props.postData
        .map( (p) => <Post message = {p.message} like = {p.like} time = {p.time} id = {p.id}/> )
    return (
    <div className={c.posts}>
        {postElements.reverse()}
    </div>
)}
export default Posts