import React, {Component} from 'react';
import Users from "./Users";
import Preloader from "../common/prerloader/Preloader";






class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getsUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getsUsers(pageNumber, this.props.pageSize)
}

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
               <Users totalUsersCount={this.props.setUsersTotalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.setCurPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.followFunk}
                   unFollow={this.props.unFollowFunk}
                      setFollowingProgress={this.props.setFollowingProgress}
            />
               </>
        );
    }
}

export default UsersAPIComponent;