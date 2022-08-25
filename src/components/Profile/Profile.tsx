import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../App";

type ProfilePropsType = {
    /*posts:Array<PostsArrayType>*/
    posts: Array<PostsArrayType>
    addPost:(postMessage:string)=>void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost = {props.addPost}/>
        </div>
    )
}


export default Profile
