import React from "react";
import {
    ActionsType,
    FollowActionType,
    SetCurrentPageType,
    SetUsersActionType,
    setUsersTotalCountType,
    UnFollowActionType
} from "./Store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"


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
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
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
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}

        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}

        }

        default:
            return state
    }


}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId: userId})
export const unfollowAC = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (currenPage: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currenPage
})
export const setUsersTotalCountAC = (totalUsersCount: number): setUsersTotalCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
