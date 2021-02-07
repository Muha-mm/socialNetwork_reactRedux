import React from 'react'
import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator, changePostTextActionCreator}
    from "../../../../../../Redux/Reducer/profilePageReducer";

    let mapStateToProps = (state) =>({
        posts:state.profilePage.right.postData,
        newPostText: state.profilePage.newPostText
    })

    let mapDispatchToProps = (dispatch) =>({
        addPost: ()=>{dispatch(addPostActionCreator())},
        changePostText: (e)=>{dispatch(changePostTextActionCreator(e.target.value))},
        handleKeyDown:(e)=>
                { if (e.key === 'Enter' && e.shiftKey) {}
                else if (e.keyCode === 13) {
                    dispatch(addPostActionCreator());
                    e.preventDefault()}
        }
    })

    let PostsConteiner = connect(mapStateToProps,mapDispatchToProps)(Posts)

export default PostsConteiner