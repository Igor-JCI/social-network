import React from "react";
import {ActionsType} from "./Store";
import {dialogsPageType, profilePageType, StateType} from "../App";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type PostsArrayType = {
    id: string,
    message: string,
    likesCount: number
}
type initialStateType = {
    posts: Array<PostsArrayType>
    newPostText: string
}

let initialState = {
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post?", likesCount: 11},
    ],
    newPostText: "It-kamasutra"
}

const profileReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST: {
            let NewPost = {
                id: "3",
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(NewPost)
            stateCopy.newPostText = ""
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }

        default:
            return state
    }

    /* if (action.type === ADD_POST) {
         let NewPost = {
             id: "3",
             message: state.newPostText,
             likesCount: 0
         }
         state.posts.push(NewPost)
         state.newPostText = ""

     } else if (action.type === UPDATE_NEW_POST_TEXT) {
         state.newPostText = action.newText

     }*/

}

type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer