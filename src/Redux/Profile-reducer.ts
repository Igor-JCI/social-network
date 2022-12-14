import React from "react";
import {ActionsType, AddPostActionType, SetUserProfileActionType, UpdateNewPostTextActionType} from "./Store";
import {ProfileType} from "../components/Profile/ProfileContainer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

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
    newPostText: "It-kamasutra",
    profile:null
}

const profileReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST: {
            /*let NewPost = {
                id: "3",
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(NewPost)
            stateCopy.newPostText = ""*/

            let text = state.newPostText
            return {
                ...state,
                posts:[...state.posts,{id: "3", message: text, likesCount: 0}],
                newPostText: ""
            }
        }

        case UPDATE_NEW_POST_TEXT: {
           /* let stateCopy = {...state}
            stateCopy.newPostText = action.newText*/

            return {...state,
                newPostText:action.newText
            }
        }
        case SET_USER_PROFILE: {return {...state, profile: action.profile}}

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




export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})




export default profileReducer