import React from "react";
import {ActionsType} from "./State";
import {dialogsPageType, profilePageType, StateType} from "../App";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


const profileReducer = (state: profilePageType, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            let NewPost = {
                id: "3",
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(NewPost)
            state.newPostText = ""
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

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