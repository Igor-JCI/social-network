import React from "react";
import {connect} from "react-redux";
import Users from "./UsersС";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/Users-reducer";
import {RootStateType} from "../../Redux/Redux-store";


type mstpType = {
    users: Array<UsersType>
}
type mdtpType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
}
export type CommonType = mstpType & mdtpType

let mapStateToProps = (state: RootStateType): mstpType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch:Dispatch): mdtpType => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer