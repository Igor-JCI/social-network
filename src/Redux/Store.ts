import {StateType} from "../App";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import {InitialStateType, UsersType} from "./Users-reducer";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {AuthReducerType} from "./Auth-reducer";

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

export type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageTextActionType = {
    type: "ADD-MESSAGE"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
export type SetUserProfileActionType = {
    type: "SET_USER_PROFILE",
    profile: ProfileType
}
type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    text: string
}
export type FollowActionType = {
    type: "FOLLOW",
    userId: number
}
export type UnFollowActionType = {
    type: "UNFOLLOW",
    userId: number
}
export type SetUsersActionType = {
    type: "SET_USERS",
    users: Array<UsersType>
}
export type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
export type setUsersTotalCountType = {
    type: "SET_TOTAL_USERS_COUNT",
    count: number
}
export type setIsFetchingType = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}
export type setUserDataType = {
    type: "SET_USER_DATA",
    data: AuthReducerType
}


export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | AddMessageTextActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageType
    | setUsersTotalCountType
    | setIsFetchingType
    | SetUserProfileActionType
    | setUserDataType


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

    dispatch(action) {

        /*this._state.profilePage = profileReducer(this._state.profilePage, action)*/
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}
export default store