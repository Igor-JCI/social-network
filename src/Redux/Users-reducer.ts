import React from "react";
import {ActionsType, FollowActionType, SetUsersActionType, UnFollowActionType} from "./Store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type LocationsType = {
    city: string,
    country: string
}
export type PhotosType = {
    small: null | string,
    large: null | string
}
export type InitialStateType = {
    users: Array<UsersType>
}
export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: PhotosType,
    status: string | null,
    followed: boolean,
    photoUrl: string,
    location: LocationsType
}


let initialState = {
    users: [] as UsersType[]
    /*    users: [
            {
                id: "1",
                photoUrl: "https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: "2",
                photoUrl: "https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg",
                followed: true,
                fullName: "Sasha",
                status: "I am boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: "3",
                photoUrl: "https://freelance.ru/img/portfolio/pics/00/3D/5C/4021338.jpg",
                followed: false,
                fullName: "Andrew",
                status: "I am boss too",
                location: {city: "Kiev", country: "Ukraine"}
            }
        ]*/
}


export const usersReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                //users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                //users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            debugger
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }


}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId: userId})
export const unfollowAC = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users: users})
