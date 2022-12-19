import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {UsersType} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    users: Array<UsersType>
}

const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? styles.selectedPage : ''}
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            </div>
            {
                props.users.map((u: UsersType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "8c42f357-e574-4a47-b1b5-8938589ef98b"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resulCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "8c42f357-e574-4a47-b1b5-8938589ef98b"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resulCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users
