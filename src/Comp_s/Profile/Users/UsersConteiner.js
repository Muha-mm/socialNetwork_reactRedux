import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unFollowAC} from "../../../Redux/Reducer/UsersPageReducer";

let mapStateToProps = (state) =>{
    return{
        users: state.UsersPage.users,
        newSearchUserText: state.newSearchUserText
    }
}

let mapDispatchToProps = (dispatch) =>({
    follow: (id)=>{dispatch(followAC(id))},
    unFollow: (id)=>{dispatch(unFollowAC(id))}
})

let UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersConteiner