import React from 'react'
import c from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
const Profile = () =>{
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )}
export default Profile