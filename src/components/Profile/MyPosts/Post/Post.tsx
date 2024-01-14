import React from "react";
import s from "./Post.module.css"

type PostTypeProps = {
    message: string
    likesCount: number
}

const Post = (props: PostTypeProps) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img src="https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg"/>
            <span>{props.message}</span>

            <div className={s.span}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}


export default Post
