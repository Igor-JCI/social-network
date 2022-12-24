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


const SET_USER_DATA = "SET_USER_DATA"


export type AuthReducerType = {
    userId: null | number,
    email: string,
    login: string,
    isAuth: boolean
}


let initialState: AuthReducerType = {
    userId: null,
    email: "",
    login: "",
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionsType): AuthReducerType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth:true}
        }

        default:
            return state
    }


}

export const setUserData = (data: AuthReducerType): setUserDataType => ({type: SET_USER_DATA, data})


export const getUserData = () => {
  return (dispatch:Dispatch) => {
      authAPI.me().then(response => {
          if (response.data.resultCode === 0) {
              dispatch(setUserData(response.data.data))
          }
      })
    }
}

