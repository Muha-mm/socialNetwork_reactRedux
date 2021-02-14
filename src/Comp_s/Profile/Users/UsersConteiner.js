import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC} from "../../../Redux/Reducer/UsersPageReducer";

let mapStateToProps = (state) =>{
    return{
        users: state.UsersPage.users,
        newSearchUserText: state.UsersPage.newSearchUserText,
        totalCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) =>({
    follow: (id)=>{dispatch(followAC(id))},
    unFollow: (id)=>{dispatch(unFollowAC(id))},
    setUsers: (users,totalCount)=>{dispatch(setUsersAC(users,totalCount))},
    setCurrentPage: (currentPage)=>{dispatch(setCurrentPageAC(currentPage))}
})

let UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersConteiner