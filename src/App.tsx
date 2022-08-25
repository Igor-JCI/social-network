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
import {addPost} from "./Redux/State";

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

type dialogsPageType = {
    dialogs: Array<DialogsArrayType>
    messages: Array<MessagesArrayType>
}

type profilePageType = {
    posts: Array<PostsArrayType>
}

type StateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}
export type AppPropsType = {
    /*  dialogs: Array<DialogsArrayType>
      messages: Array<MessagesArrayType>
      posts: Array<PostsArrayType>*/
    state: StateType
    addPost: (postMessage: string) => void
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
                    />}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>

                    {/* <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
