import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";


export type DialogsArrayType = {
    id: string
    name: string
}

export type MessagesArrayType = {
    id: string
    message: string
}

export type PostsArrayType = {
    id: string
    message: string
    likesCount: number
}

export type dialogsPageType = {
    dialogs: Array<DialogsArrayType>
    messages: Array<MessagesArrayType>
}

export type profilePageType = {
    posts: Array<PostsArrayType>
    newPostText:string
}

export type StateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}
export type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText:(newText: string) => void
}


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}/>}/>
                    <Route path="/profile" render={() => <Profile
                        posts={props.state.profilePage.posts}
                        addPost={props.addPost}
                        newPostText = {props.state.profilePage.newPostText}
                        updateNewPostText = {props.updateNewPostText}
                    />}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
