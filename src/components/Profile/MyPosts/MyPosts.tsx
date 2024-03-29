import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsArrayType} from "../../../App";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

import {Divider, Space, Tag} from 'antd';

type MyPostsPropsType = {
    posts: Array<PostsArrayType>
    addPost: (newPostText: string) => void
}
const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <Space wrap className={s.title}>
                <Tag color="geekblue"><h3>My posts</h3></Tag>
            </Space>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {
                    props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    )
})

export type AddPostFormValuesType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText" validate={[required, maxLength10]}
                   placeholder="Post message"/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const AddNewPostFormRedux = reduxForm<AddPostFormValuesType>({form: "profileAddNewPostForm"})(AddNewPostForm)


export default MyPosts
