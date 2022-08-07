import React from "react";
import s from "./Post.module.css"

type PostTypeProps = {
    message: string
    likesCount: string
}

const Post = (props: PostTypeProps) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img src="https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}


export default Post
