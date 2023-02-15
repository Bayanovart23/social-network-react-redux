import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator,} from "../../../Redux/ProfilePage-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";




let mapStateToPropsContainer = (state) => {
    return {
        newTextArea: state.profilePage.newTextArea,
        posts: state.profilePage.posts
    }

}

let mapDispatchToPropsContainer = (dispatch) => {
    return {
        addNewPost: ()=> dispatch(addPostActionCreator()),
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator( text);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToPropsContainer, mapDispatchToPropsContainer)(MyPosts)

export default MyPostsContainer;