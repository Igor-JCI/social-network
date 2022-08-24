import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsArrayType} from "../../../App";

type MyPostsPropsType ={
    posts:Array<PostsArrayType>
}


const MyPosts = (props:MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        alert (text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref ={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>

                {
                    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
                }

                {/* <Post message={posts[0].message} likesCount= {posts[0].likesCount}/>
                <Post message={posts[1].message} likesCount= {posts[1].likesCount}/>*/}
            </div>
        </div>
    )
}


export default MyPosts
