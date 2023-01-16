import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {
    follow,
    followSuccess,
    requestUsers,
    setCurrentPage,
    unfollow,
    unfollowSuccess,
    UsersType
} from "../../Redux/Users-reducer";
import {RootStateType} from "../../Redux/Redux-store";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

type mstpType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}
type mdtpType = {
    followSuccess: (userId: number) => void,
    unfollowSuccess: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    requestUsers: (currentPage: number, pageSize: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}
export type CommonType = mstpType & mdtpType

class UsersContainer extends React.Component<CommonType> {
    constructor(props: CommonType) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
        /* this.props.setCurrentPage(pageNumber)
         this.props.toggleIsFetching(true)
         userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
             this.props.toggleIsFetching(false)
             this.props.setUsers(data.items)
         })*/
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followSuccess={this.props.followSuccess}
                    unfollowSuccess={this.props.unfollowSuccess}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>

        );
    }
}

/*let mapStateToProps = (state: RootStateType): mstpType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state: RootStateType): mstpType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage, requestUsers, follow, unfollow}),
)(UsersContainer)

/*export default withAuthRedirect(connect(mapStateToProps,
    {followSuccess, unfollowSuccess, setCurrentPage, getUsers, follow, unfollow})(UsersContainer))*/



