import React from 'react'
import c from './Profile.module.css'
import Left from "./ProfileC's/L/Left";
import Right from "./ProfileC\'s/R/Right";
const Profile = (props) =>{
    return (
        <div className={c.profile}>
            <Left left = {props.profilePage.left}/>
            <Right store = {props.store} right = {props.profilePage.right}/>
        </div>
    )}
export default Profile