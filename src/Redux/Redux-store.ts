import React from "react";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer} from "./Users-reducer";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import {authReducer} from "./Auth-reducer";
import thunkMiddleware from "redux-thunk"
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store