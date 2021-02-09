import React from 'react'
import c from './Users.module.css'
import User from "./User/User";
import SearchUser from "./SearchUser/SearchUser";
const Users = (props) =>{
    let UsersPageElements = props.users
        .map( (u) => <User ava = {u.avatar} name = {u.name}
                           country = {u.country} city = {u.city}
                           profileLink={u.profileLink} isFollow = {u.isFollow}
                           follow = {props.follow} unFollow = {props.unFollow} id = {u.id}/>)

    return (
    <div className={c.users}>
        <SearchUser newSearchUserText = {props.newSearchUserText}/>
        {UsersPageElements}
    </div>
)}
export default Users