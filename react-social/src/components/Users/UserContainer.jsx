import React from 'react';
import {connect} from "react-redux";
import {
  followFunk, getsUsers,
    setCurPage,
    setFollowingProgress,
    unFollowFunk
} from "../Redux/UsersPage-redusers";
import UsersAPIComponent from "./UsersApiComponent";


let mapStateToPropsUsers = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}


const UserContainer = connect(mapStateToPropsUsers, {
    unFollowFunk,
    followFunk,
    setCurPage,
    setFollowingProgress,
    getsUsers

})(UsersAPIComponent);

export default UserContainer;