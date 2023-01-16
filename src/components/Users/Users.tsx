import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {UsersType} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

export type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    followSuccess: (userId: number) => void,
    unfollowSuccess: (userId: number) => void,
    users: Array<UsersType>,
    followingInProgress: number[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
            <div>
                {
                    props.users.map((u: UsersType) => <User user={u} followingInProgress={props.followingInProgress}
                                                            follow={props.follow} unfollow={props.unfollow}
                                                            key={u.id}/>)
                }
            </div>
        </div>
    )
}

export default Users
