import React, {ChangeEvent, MouseEventHandler} from "react";
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";
import axios from "axios";
import {UsersType} from "../../Redux/Users-reducer";
import {CommonType} from "./UsersContainer";


export class Users extends React.Component<CommonType> {
    constructor(props: CommonType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount (response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
// 4 === 4 && 5
        // 4===5 ? 5 : 6
        // || 0 || 15 = first truth value  user || 'Micke'
        // && 15 && 20
        return (

            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            className={this.props.currentPage === p ? styles.selectedPage : ''}
                            onClick={(e:React.MouseEvent<HTMLElement>) => {this.onPageChanged(p)}}>{p}</span>

                        // return <span className={this.props.currentPage === p && styles.selectedPage }>{p}</span>

                    })}
                </div>
                {
                    this.props.users.map((u: UsersType) => <div key={u.id}>
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
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
        );
    }
}


export default Users
