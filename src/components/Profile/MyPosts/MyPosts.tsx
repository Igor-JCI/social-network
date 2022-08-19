import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post?", likesCount: 11},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>

                {
                    posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
                }

                {/* <Post message={posts[0].message} likesCount= {posts[0].likesCount}/>
                <Post message={posts[1].message} likesCount= {posts[1].likesCount}/>*/}
            </div>
        </div>
    )
}


export default MyPosts
