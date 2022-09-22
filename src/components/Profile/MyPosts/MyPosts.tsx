import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsArrayType} from "../../../App";
import {ActionsType, addPostAC, updateNewPostTextAC} from "../../../Redux/State";

type MyPostsPropsType = {
    posts: Array<PostsArrayType>
    newPostText: string
    dispatch:(action:ActionsType) => void
}




const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        debugger
        props.dispatch(addPostAC())
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.dispatch(updateNewPostTextAC(text))
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    )
}


export default MyPosts
