
import {
    ActionsType,
    FollowActionType,
    SetCurrentPageType, setFollowingInProgress, setIsFetchingType,
    SetUsersActionType,
    setUsersTotalCountType,
    UnFollowActionType
} from "./Store";
import exp from "constants";
import {Dispatch} from "redux";
import {userAPI} from "../API/API";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
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


let initialState: InitialStateType = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state
    }


}

export const followSuccess = (userId: number): FollowActionType => ({type: FOLLOW, userId: userId})
export const unfollowSuccess = (userId: number): UnFollowActionType => {
    console.log("userId", userId)
    return {type: UNFOLLOW, userId: userId}
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users: users})
export const setCurrentPage = (currenPage: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currenPage
})
export const setUsersTotalCount = (totalUsersCount: number): setUsersTotalCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): setIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): setFollowingInProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}

export const follow = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }

}

export const unfollow = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }

}
