import React from 'react'
import c from './User.module.css'
import defaultUserPhoto from '../../../../assets/photos/userDefaultPhoto.jpg'
const User = (props) =>{

    return (
    <div className={c.user}>

        <div className={c.left}>
            <div className={c.photo}>
                <a href={'#'}>
                    <img src={props.ava != null? props.ava : defaultUserPhoto} alt="ava"/>
                </a>
            </div>

            <div className={c.center}>
                <a href={'#'}>
                    <div className={c.name}>{props.name}</div>
                </a>

                <div className={c.location}>
                <span className={c.city}>
                    {/*{'props.city'}*/}
                    Moscow
                    <span>{', '}</span>
                </span>
                    <span className={c.country}>
                        {/*{'props.country'}*/}
                        Russia
                    </span>
                </div>
            </div>
        </div>

        <div className={c.right}>
            {props.isFollow ?
                <button className={c.unFollow} onClick={()=>{props.unFollow(props.id)}}>unfollow</button> :
                <button className={c.follow} onClick={()=>{props.follow(props.id)}}>follow</button>}
        </div>

    </div>
)}
export default User