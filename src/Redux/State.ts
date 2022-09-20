import {StateType} from "../App";


const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    _updateNewPostText: (newText: string) => void
    _updateNewMessageText: (text: string) => void
    _addPost: () => void
    _addMessage: () => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}
type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageTextActionType = {
    type: "ADD-MESSAGE"
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type UpdateNewMessageTextActionType = {
    type:"UPDATE-NEW-MESSAGE-TEXT",
    text: string
}
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | AddMessageTextActionType


export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const updateNewMessageTextAC = (text: string): UpdateNewMessageTextActionType => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const addMessageTextAC = (): AddMessageTextActionType => ({type: ADD_MESSAGE})

/*export const addPostAC = ():AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextAC = (text:string):UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}*/


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi, how are you?", likesCount: 12},
                {id: "2", message: "It's my first post?", likesCount: 11},
            ],
            newPostText: "It-kamasutra"
        },
        dialogsPage: {
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
    },

    getState() {
        return this._state
    },
    _callSubscriber(_state: StateType) {
        console.log("State changed")
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    _updateNewMessageText(text: string) {
        this._state.dialogsPage.newMessageText = text
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _addPost() {
        let NewPost = {
            id: "3",
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(NewPost)
        this._updateNewPostText("")
        this._callSubscriber(this._state)
    },
    _addMessage (){
        let NewMessage = {
            id: "6",
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(NewMessage)
        this._updateNewMessageText ("")
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.text)

        }else if (action.type === ADD_MESSAGE) {
            this._addMessage()
        }

    }
}

export default store