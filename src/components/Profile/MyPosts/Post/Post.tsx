import React from "react";
import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img src="https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}


export default Post
