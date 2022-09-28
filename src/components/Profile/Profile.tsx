import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../App";
import {ActionsType} from "../../Redux/State";

type ProfilePropsType = {
    posts: Array<PostsArrayType>
    newPostText:string
    dispatch:(action:ActionsType) => void

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch = {props.dispatch}
                     newPostText = {props.newPostText}
                     posts={props.posts}
                     />
        </div>
    )
}


export default Profile
