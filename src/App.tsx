import React from 'react';
import './App.css';
import HContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/NavBar/NavBar";
import {BrowserRouter, Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ContainerForUsersComponent from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";

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
    newMessageText: string
}
export type profilePageType = {
    posts: Array<PostsArrayType>
    newPostText: string
}
export type StateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}
export type AppPropsType = {
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <ContainerForUsersComponent/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>

                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
