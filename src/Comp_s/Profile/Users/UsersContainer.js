import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../../Redux/Reducer/usersPageReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=1&count=12`)
                .then((response) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items, response.data.totalCount)
                })
        }
    }

    setCurrentPage = () => {
        let current = this.props.currentPage
        this.props.setCurrentPage(current += 1)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=12`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items, response.data.totalCount)
            })
    }

    render() {
        return <Users users={this.props.users} follow={this.props.follow}
                      unFollow={this.props.unFollow} newSearchUserText = {this.props.newSearchUserText}
                      totalCount={this.props.totalCount} currentPage={this.props.currentPage}
                      setCurrentPage={this.setCurrentPage} isFetching = {this.props.isFetching}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        newSearchUserText: state.usersPage.newSearchUserText,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, toggleIsFetching
})(UsersContainer)