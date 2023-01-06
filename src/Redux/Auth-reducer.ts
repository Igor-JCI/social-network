import React from "react";
import {
    ActionsType,
    FollowActionType,
    SetCurrentPageType, setIsFetchingType, setUserDataType,
    SetUsersActionType,
    setUsersTotalCountType,
    UnFollowActionType
} from "./Store";
import {Dispatch} from "redux";
import {authAPI} from "../API/API";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./Redux-store";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthReducerType = {
    id: null | number,
    email: string,
    login: string,
    isAuth: boolean
}
let initialState: AuthReducerType = {
    id: null,
    email: "",
    login: "",
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setUserData = (id: null | number, email: string, login: string, isAuth: boolean): setUserDataType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const getUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkDispatch<RootStateType, {}, ActionsType>) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData())
            }
        })
    }
}

export const logout = () => {
    return (dispatch: ThunkDispatch<RootStateType, {}, ActionsType>) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, "", "", false))
            }
        })
    }
}