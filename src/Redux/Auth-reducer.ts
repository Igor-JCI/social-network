import {ActionsType, getCaptchaUrlSuccessType, setUserDataType,} from "./Store";
import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../API/API";
import {ThunkDispatch} from "redux-thunk";
import {AppThunk, RootStateType} from "./Redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"
export type AuthReducerType = {
    id: string,
    email: string,
    login: string,
    isAuth: boolean,
    captchaUrl?: null | string | undefined
}
let initialState: AuthReducerType = {
    id: "",
    email: "",
    login: "",
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action: ActionsType): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {...state, captchaUrl:action.payload}
        }
        default:
            return state
    }
}

export const setUserData = (id: string, email: string, login: string, isAuth: boolean): setUserDataType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl
})

export const getUserData = () => {
    return async (dispatch: Dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("Login", {_error: message}))
            console.log(message)
        }
    }
}
export const logout = () => {
    return async (dispatch: ThunkDispatch<RootStateType, {}, ActionsType>) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData("", "", "", false))
        }
    }
}
export const getCaptchaUrl = (): AppThunk => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}