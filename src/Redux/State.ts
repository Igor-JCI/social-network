import {StateType} from "../App";


let rerenderEntireTree = (state:StateType) => {
    console.log("State changed")
}

let state = {
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
        ]
    }
}

export const addPost = () => {
    let NewPost = {
        id: "3",
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(NewPost)
    updateNewPostText("")
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer:(state: StateType)=>void) => {
    rerenderEntireTree = observer
}

export default state