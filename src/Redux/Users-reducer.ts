import {
    ActionsType,
    FollowActionType,
    SetCurrentPageType, setFollowingInProgress, setIsFetchingType,
    SetUsersActionType,
    setUsersTotalCountType,
    UnFollowActionType
} from "./Store";
import {Dispatch} from "redux";
import {CommonResponse, StatusCodes, userAPI} from "../API/API";
import {AxiosResponse} from "axios";
import {updateObjectInArray} from "../Utils/object-helper";

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
    pageSize: 10,
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
                users: updateObjectInArray(state, action.userId, "id", {followed: true})
                /* users: state.users.map(u => {
                     if (u.id === action.userId) {
                         return {...u, followed: true}
                     }
                     return u
                 })*/
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state, action.userId, "id", {followed: false})

                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
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

//Action Creators
export const followSuccess = (userId: number): FollowActionType => ({type: FOLLOW, userId: userId})
export const unfollowSuccess = (userId: number): UnFollowActionType => {
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

// Thunk Creators
type apiMethodType = (userId: number) => Promise<AxiosResponse<CommonResponse<{}>, any>>
type actionCreatorType = (userId: number) => FollowActionType | UnFollowActionType

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await userAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))

    }
}


const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: apiMethodType, actionCreator: actionCreatorType) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === StatusCodes.success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        await followUnfollowFlow(dispatch, userId, userAPI.follow, followSuccess)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        await followUnfollowFlow(dispatch, userId, userAPI.unfollow, unfollowSuccess)
    }
}
