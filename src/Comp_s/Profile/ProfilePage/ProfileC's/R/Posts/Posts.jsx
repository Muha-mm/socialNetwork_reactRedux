import React from 'react'
import c from './Posts.module.css'
import Post from "./Post/Post";
import Input from "./Input/Input";
const Posts = (props) =>{
    let postElements = props.posts
        .map( (p) => <Post message = {p.message} like = {p.like} time = {p.time} id = {p.id}/> )

    return (
    <div className={c.posts}>
        <Input
            newPostText = {props.newPostText}
            addPost = {props.addPost}
            changePostText = {props.changePostText}
            handleKeyDown = {props.handleKeyDown}
        />

        {postElements.reverse()}

    </div>
)}
export default Posts