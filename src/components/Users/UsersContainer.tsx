import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../App";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/Users-reducer";
import {RootStateType} from "../../Redux/Redux-store";


type mstpType = {
    users: Array<UsersType>
}

type mdtpType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
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
        follow: (userId:string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:string)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer