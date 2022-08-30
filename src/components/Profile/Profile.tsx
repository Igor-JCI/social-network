import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../App";

type ProfilePropsType = {
    posts: Array<PostsArrayType>
    addPost:()=>void
    newPostText:string
    updateNewPostText:(newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText= {props.updateNewPostText} newPostText = {props.newPostText} posts={props.posts} addPost = {props.addPost}/>
        </div>
    )
}


export default Profile
