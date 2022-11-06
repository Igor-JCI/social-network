import React from "react";
import {ActionsType} from "./State";
import {dialogsPageType, StateType} from "../App";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {

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