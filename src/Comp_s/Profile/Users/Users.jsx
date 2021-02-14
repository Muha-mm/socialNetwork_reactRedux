import React from 'react'
import c from './Users.module.css'
import User from "./User/User";
import SearchUser from "./SearchUser/SearchUser";
import * as axios from 'axios'

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=1&count=12`)
                .then((response) => {
                this.props.setUsers(response.data.items, response.data.totalCount)
            })
        }
    }
    setCurrentPage = () =>{
        let current = this.props.currentPage
        this.props.setCurrentPage(current+=1)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=12`)
            .then((response) => {
                this.props.setUsers(response.data.items, response.data.totalCount)})
        }

    render() {
        let UsersPageElements = this.props.users
            .map((u) => <User key={u.id} ava={u.photos.large} name={u.name}
                              country={u.country} city={u.city}
                              profileLink={u.profileLink} isFollow={u.followed}
                              follow={this.props.follow} id={u.id} unFollow={this.props.unFollow}/>)

        return (
            <div className={c.users}>
                <SearchUser newSearchUserText={this.props.newSearchUserText} usersCount={this.props.totalCount}/>
                <hr className={c.line}/>
                {UsersPageElements}
                <div className={c.takeUsers}>
                    <button onClick={this.setCurrentPage}>+</button>
                </div>
            </div>
        )
    }
}

export default Users