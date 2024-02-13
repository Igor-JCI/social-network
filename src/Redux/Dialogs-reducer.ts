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
export type AddMessageTextActionType = {
    type: "ADD-MESSAGE",
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
        {id: "1", message: "Hello, my name is Igor. Nice to meet you"},
        {id: "2", message: "I'm a frontend developer"},
        {id: "3", message: "What project are you working on now?"},
        {id: "4", message: "Always open for communication"},
        {id: "5", message: "I am currently looking for new career opportunities"}
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
}

export const addMessageTextAC = (newMessageText:string): AddMessageTextActionType => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer