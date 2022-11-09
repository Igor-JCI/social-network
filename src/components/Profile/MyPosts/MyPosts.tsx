import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsArrayType} from "../../../App";

type MyPostsPropsType = {
    posts: Array<PostsArrayType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add Post</button>
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
