import React from "react";
import {combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer} from "./Users-reducer";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers)


export default store