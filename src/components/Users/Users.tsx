import React, {FC} from "react";
import {UsersType} from "../../Redux/Users-reducer";
import {CommonType} from "./UsersContainer";
import styles from "./users.module.css";

//
// type UsersPropsType = {
//     addFollow: (userId: string) => void,
//     addUnfollow: (userId: string) => void,
//     setUsers: (users: Array<UsersType>) => void
//
// }

const Users: FC<CommonType> = ({users, setUsers, follow, unfollow}) => {

    if (users.length === 0) {
        setUsers(
            [
                {
                    id: "1",
                    photoUrl: "https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg",
                    followed: false,
                    fullName: "Dmitry",
                    status: "I am boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: "2",
                    photoUrl: "https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg",
                    followed: true,
                    fullName: "Sasha",
                    status: "I am boss too",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: "3",
                    photoUrl: "https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg",
                    followed: false,
                    fullName: "Andrew",
                    status: "I am boss too",
                    location: {city: "Kiev", country: "Ukraine"}
                }
            ]
        )

    }


    return (
        <div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users
