import React from 'react'
import c from './Friends.module.css'
import Friend from "./Friend/Friend";
const Friends = () =>{
    return (
        <div className={c.friends}>
                <div>
                    <a href="#" className={c.friendsCount}>147 друзей</a>
                </div>

                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
        </div>
    )}
export default Friends