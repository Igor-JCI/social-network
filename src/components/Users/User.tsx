import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {UsersType} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";
import {Button, Flex} from 'antd';

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
                {
                    props.user.followed
                        ? <Flex gap="small" wrap="wrap">
                            <Button size={"small"} disabled={props.followingInProgress.some(id => id === props.user.id)}
                                    onClick={() => {
                                        props.unfollow(props.user.id)
                                    }}>Unfollow</Button>
                        </Flex>

                        : <Flex gap="small" wrap="wrap">
                            <Button size={"small"} disabled={props.followingInProgress.some(id => id === props.user.id)}
                                    onClick={() => {
                                        props.follow(props.user.id)
                                    }}>Follow</Button>
                        </Flex>
                }
            </div>
            </span>
            <span>
                <span>
                            <div>Name: {props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{"location-country"}</div>
                            <div>{"location-city"}</div>
                        </span>
            </span>
        </div>
    )
}

export default User
