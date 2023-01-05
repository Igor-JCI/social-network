import {ActionsType} from "./Store";

const ADD_MESSAGE = "ADD-MESSAGE";

export type dialogsArrayType = {
    id: string,
    name: string
}
export type messagesArrayType = {
    id: string,
    message: string
}
type initialStateType = {
    dialogs: Array<dialogsArrayType>
    messages: Array<messagesArrayType>
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
}

const dialogsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let text = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: "6", message: text}]
            }
        }
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

export type AddMessageTextActionType = {
    type: "ADD-MESSAGE",
    newMessageText:string
}

export const addMessageTextAC = (newMessageText:string): AddMessageTextActionType => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer