import React from 'react'
import c from './Profile.module.css'
import Left from "./ProfileC's/L/Left";
import Right from "./ProfileC\'s/R/Right";
const Profile = () =>{
    return (
        <div className={c.profile}>
            <Left/>
            <Right/>
        </div>
    )}
export default Profile