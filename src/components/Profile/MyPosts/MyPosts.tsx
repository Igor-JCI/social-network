import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsArrayType} from "../../../App";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    posts: Array<PostsArrayType>
    addPost: (newPostText: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddТуцPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {
                    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    )
}

export type AddPostFormValuesType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostText"/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const AddТуцPostFormRedux = reduxForm<AddPostFormValuesType>({form: "profileAddNewPostForm"})(AddNewPostForm)


export default MyPosts
