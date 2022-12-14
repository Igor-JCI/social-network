import React from "react";
import {addPostAC} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../../Redux/Redux-store";

type MyPostsContainerPropsType = {
    /* posts: Array<PostsArrayType>
     newPostText: string
     dispatch: (action: ActionsType) => void*/
}


/*const MyPostsContainer = (props: MyPostsContainerPropsType) => {

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
}*/

let mapStateToProps = (state:RootStateType) => {
    return {
        posts:state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost:(newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts)

export default MyPostsContainer
