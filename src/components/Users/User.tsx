import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {UsersType} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";

export type UserType = {
    user: UsersType,
    followingInProgress: number[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const User = (props: UserType) => {
    return (
        <div>
            <span>
              <div>
                <NavLink to={"/profile/" + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </NavLink>
            </div>
                <div>
                {props.user.followed
                    ? <button
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => {
                            props.unfollow(props.user.id)
                        }}>Unfollow</button>

                    : <button
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => {
                            props.follow(props.user.id)
                        }}>Follow</button>}
            </div>
            </span>
            <span>
                <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
            </span>
        </div>
    )
}

export default User
