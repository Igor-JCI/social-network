import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    UsersType, unfollowSuccess, followSuccess, follow, unfollow
} from "../../Redux/Users-reducer";
import {RootStateType} from "../../Redux/Redux-store";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component<CommonType> {
    constructor(props: CommonType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                    followingInProgress = {this.props.followingInProgress}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                />
            </>

        );
    }
}

type mstpType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:number[]
}
type mdtpType = {
    followSuccess: (userId: number) => void,
    unfollowSuccess: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    follow:(userId:number) => void,
    unfollow:(userId:number) => void
}

export type CommonType = mstpType & mdtpType

let mapStateToProps = (state: RootStateType): mstpType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose <ComponentType> (
    connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage, getUsers, follow, unfollow}),
)(UsersContainer)

/*export default withAuthRedirect(connect(mapStateToProps,
    {followSuccess, unfollowSuccess, setCurrentPage, getUsers, follow, unfollow})(UsersContainer))*/



