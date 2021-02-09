import React from 'react'
import c from './User.module.css'
const User = (props) =>{

    return (
    <div className={c.user}>

        <div className={c.left}>
            <div className={c.photo}>
                <a href={props.profileLink}>
                    <img src={props.ava} alt="ava"/>
                </a>
            </div>

            <div className={c.center}>
                <a href={props.profileLink}>
                    <div className={c.name}>{props.name}</div>
                </a>

                <div className={c.location}>
                <span className={c.city}>
                    {props.city}
                    <span>{', '}</span>
                </span>
                    <span className={c.country}>
                        {props.country}
                    </span>
                </div>
            </div>
        </div>

        <div className={c.right}>
            {props.isFollow ?
                <button className={c.unFollow} onClick={()=>{props.unFollow(props.id)}}>Unfollow</button> :
                <button className={c.follow} onClick={()=>{props.follow(props.id)}}>Follow</button>}
        </div>

    </div>
)}
export default User