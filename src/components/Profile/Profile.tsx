import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../App";
import {ActionsType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileType

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer
                /*dispatch={props.dispatch}
                newPostText={props.newPostText}
                posts={props.posts}*/
            />
        </div>
    )
}


export default Profile
