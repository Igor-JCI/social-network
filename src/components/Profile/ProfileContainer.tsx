import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../App";
import {ActionsType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import {CommonType} from "../Users/UsersContainer";
import axios from "axios";

type ProfileContainerPropsType = {
    /* posts: Array<PostsArrayType>
     newPostText: string
     dispatch: (action: ActionsType) => void*/

}

class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    constructor(props: ProfileContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    render() {
        return (
            <div>
                <Profile/>
            </div>
        )
    }

}


export default ProfileContainer
