import React from "react";
import {ActionsType} from "./Store";
import {dialogsPageType, StateType} from "../App";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

type dialogsArrayType = {
    id: string,
    name: string
}
type messagesArrayType = {
    id: string,
    message: string
}
type initialStateType = {
    dialogs:Array<dialogsArrayType>
    messages:Array<messagesArrayType>
    newMessageText:string
}

let initialState = {
    dialogs: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrei"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Viktor"},
        {id: "6", name: "Valera"},
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How is your it-kamasutra?"},
        {id: "3", message: "Yo"},
        {id: "4", message: "Yo"},
        {id: "5", message: "Yo"}
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state

        case ADD_MESSAGE:
            let NewMessage = {
                id: "6",
                message: state.newMessageText
            }
            state.messages.push(NewMessage)
            state.newMessageText = ""
            return state
        default:
            return state
    }

    /*if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.text


    } else if (action.type === ADD_MESSAGE) {
        let NewMessage = {
            id: "6",
            message: state.newMessageText
        }
        state.messages.push(NewMessage)
        state.newMessageText = ""
    }
    return state*/
}


type AddMessageTextActionType = {
    type: "ADD-MESSAGE"
}
type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    text: string
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})
export const addMessageTextAC = (): AddMessageTextActionType => ({type: ADD_MESSAGE})

export default dialogsReducer