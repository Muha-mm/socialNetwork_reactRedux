import React from 'react'
import c from './Friends.module.css'
import Friend from "./Friend/Friend";
const Friends = (props) =>{

    let friendsName = props.sixFriends
        .map( (f) => <Friend name = {f.name}/> )

    return (
        <div className={c.friends}>
                <div>
                    <a href="#" className={c.friendsCount}>147 друзей</a>
                </div>
            {friendsName}
        </div>
    )}
export default Friends