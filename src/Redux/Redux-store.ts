import React from "react";
import {combineReducers, legacy_createStore as createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

let store = createStore(reducers)

export default store