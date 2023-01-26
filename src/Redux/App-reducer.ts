import {ActionsType,} from "./Store";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./Redux-store";
import {getUserData} from "./Auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"
export type setInitializedType = {
    type: "INITIALIZED_SUCCESS"
}
export type AuthReducerType = {
    initialized: boolean
}
let initialState: AuthReducerType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: ActionsType): AuthReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export const initializedSuccess = (): setInitializedType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
    return (dispatch: ThunkDispatch<RootStateType, {}, ActionsType>) => {
        let promise = dispatch(getUserData())
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })

    }
}