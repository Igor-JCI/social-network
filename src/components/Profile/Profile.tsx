import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../App";

type ProfilePropsType ={
    posts:Array<PostsArrayType>
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}/>
        </div>
    )
}


export default Profile
