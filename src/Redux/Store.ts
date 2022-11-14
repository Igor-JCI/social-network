import {StateType} from "../App";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import {InitialStateType, UsersType} from "./Users-reducer";

export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    /*_updateNewPostText: (newText: string) => void*/
    /*_updateNewMessageText: (text: string) => void*/
    // _addPost: () => void
    /*_addMessage: () => void*/
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
    type: "UPDATE-NEW-MESSAGE-TEXT",
    text: string
}
export type FollowActionType = {
    type: "FOLLOW",
    userId: string
}
export type UnFollowActionType = {
    type: "UNFOLLOW",
    userId: string
}
export type SetUsersActionType = {
    type: "SET_USERS",
    users: Array<UsersType>
}

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | AddMessageTextActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType


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
        },
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

    // _addPost() {
    //     let NewPost = {
    //         id: "3",
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(NewPost)
    //     this._updateNewPostText("")
    //     this._callSubscriber(this._state)
    // },
    /*_updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },*/
    /* _addMessage() {
         let NewMessage = {
             id: "6",
             message: this._state.dialogsPage.newMessageText
         }
         this._state.dialogsPage.messages.push(NewMessage)
         this._updateNewMessageText("")
         this._callSubscriber(this._state)
     },*/
    /* _updateNewMessageText(text: string) {
         this._state.dialogsPage.newMessageText = text
         this._callSubscriber(this._state)
     },*/

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)

        /*   if (action.type === ADD_POST) {
               let NewPost = {
                   id: "3",
                   message: this._state.profilePage.newPostText,
                   likesCount: 0
               }
               this._state.profilePage.posts.push(NewPost)
               this._state.profilePage.newPostText = ""
               this._callSubscriber(this._state)

           } else if (action.type === UPDATE_NEW_POST_TEXT) {
               this._state.profilePage.newPostText = action.newText
               this._callSubscriber(this._state)

           } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
               this._state.dialogsPage.newMessageText = action.text
               this._callSubscriber(this._state)

           } else if (action.type === ADD_MESSAGE) {
               let NewMessage = {
                   id: "6",
                   message: this._state.dialogsPage.newMessageText
               }
               this._state.dialogsPage.messages.push(NewMessage)
               this._state.dialogsPage.newMessageText = ""
               this._callSubscriber(this._state)
           }*/
    }
}
export default store