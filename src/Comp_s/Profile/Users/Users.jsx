import React from 'react'
import c from './Users.module.css'
import User from "./User/User";
import SearchUser from "./SearchUser/SearchUser";
import Preloader from "../../../assets/Preloader/Preloader";


let Users = (props) => {
    let UsersPageElements = props.users
        .map((u) => <User key={u.id} ava={u.photos.large} name={u.name}
                          country={u.country} city={u.city}
                          profileLink={u.profileLink} isFollow={u.followed}
                          follow={props.follow} id={u.id} unFollow={props.unFollow}/>)

    return (
        <div className={c.users}>
            <SearchUser newSearchUserText={props.newSearchUserText} usersCount={props.totalCount}/>
            <hr className={c.line}/>
            {UsersPageElements}
            <div className={c.takeUsers}>
                {/*<Preloader/>*/}
                {props.isFetching?<Preloader/>:
                <button onClick={props.setCurrentPage}>+</button>}
            </div>
        </div>
    )
}

export default Users