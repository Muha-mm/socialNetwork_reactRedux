import React from 'react'
import c from './Profile.module.css'
import Left from "./ProfileC's/L/Left";
import Right from "./ProfileC\'s/R/Right";
const Profile = (props) =>{
    return (
        <div className={c.profile}>
            <Left left = {props.profilePage.left}/>
            <Right right = {props.profilePage.right} addPost={props.addPost} change = {props.change}/>
        </div>
    )}
export default Profile