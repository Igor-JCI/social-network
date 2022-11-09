import React from "react";
import {PostsArrayType} from "../../../App";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/Profile-reducer";
import {ActionsType} from "../../../Redux/Store";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    /* posts: Array<PostsArrayType>
     newPostText: string
     dispatch: (action: ActionsType) => void*/
}


const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const onPostChange = (text: string) => {
                        let action = updateNewPostTextAC(text)
                        store.dispatch(action)
                    }
                    return (
                        <MyPosts posts={store.getState().profilePage.posts}
                                 newPostText={store.getState().profilePage.newPostText}
                                 updateNewPostText={onPostChange}
                                 addPost={addPost}/>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}


export default MyPostsContainer
