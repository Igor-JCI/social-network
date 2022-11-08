import React from "react";
import {PostsArrayType} from "../../../App";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/Profile-reducer";
import {ActionsType} from "../../../Redux/Store";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    posts: Array<PostsArrayType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let addPost = () => {
        props.dispatch(addPostAC())
    }
    const onPostChange = (text:string) => {
        let action = updateNewPostTextAC(text)
        props.dispatch(action)
    }
    return (
        <MyPosts posts={props.posts} newPostText={props.newPostText} updateNewPostText={onPostChange} addPost = {addPost}/>
    )
}


export default MyPostsContainer
