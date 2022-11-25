import React, {FC} from "react";
import {CommonType} from "./UsersContainer";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

const Users: FC<CommonType> = ({users, setUsers, follow, unfollow}) => {

    let getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(response => {
                setUsers(response.data.items)
            })
        }
    }


    return (

        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        {/*{
                            u.photos.small &&
                            <div>
                                <img src={u.photos.small} className={styles.userPhoto}/>
                            </div>
                        }*/}

                        <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    follow(u.id)
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
