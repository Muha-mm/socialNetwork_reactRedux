import React from 'react'
import c from './ProfileInfo.module.css'
const ProfileInfo = () =>{
    return (
    <div>
        <div className={c.avatar}>
            <img className={c.photo} width={170} src="https://i.pinimg.com/originals/b7/cd/b2/b7cdb2dd27fd48cde91f48e25317288f.jpg" alt="avatarka;)"/>
        </div>

        <div
            className={c.zag}>Info+Ava
        </div>
    </div>
)}
export default ProfileInfo