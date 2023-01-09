import React from "react";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer} from "./Users-reducer";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import {authReducer} from "./Auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {FormAction, reducer as formReducer} from "redux-form";
import {ActionsType} from "./Store";
import {appReducer} from "./App-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// export type  AppDispatch = ThunkDispatch<RootStateType, any, AnyAction>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionsType | FormAction>
export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store

export default store