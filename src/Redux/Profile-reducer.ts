import React from "react";
import {
    ActionsType,
    AddPostActionType,
    setStatusType,
    SetUserProfileActionType,
    UpdateNewPostTextActionType
} from "./Store";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

type PostsArrayType = {
    id: string,
    message: string,
    likesCount: number
}
type initialStateType = {
    posts: Array<PostsArrayType>
    newPostText: string
    profile: ProfileType,
    status: string
}
// profile.contact &&
// profile.contact.vk

let initialState = {
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post?", likesCount: 11},
    ],
    newPostText: "",
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ""
        }
    },
    status: ""
}

const profileReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

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
                posts: [...state.posts, {id: "3", message: text, likesCount: 0}],
                newPostText: ""
            }
        }

        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }

        default:
            return state
    }

}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})


export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer