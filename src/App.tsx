import React, {ComponentType} from 'react';
import './App.css';
import HContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ContainerForUsersComponent from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store, {RootStateType} from "./Redux/Redux-store";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import {Preloader} from "./components/Common/Preloader/Preloader";

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
type MDTP = {
    initializeApp: () => void
}
type MSTP = {
    initialized: boolean
}
type CommonType = MDTP & MSTP

class App extends React.Component<CommonType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            <Preloader/>
        }
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
}

const mapStateToProps = (state: RootStateType): MSTP => {
    return {
        initialized: state.app.initialized
    }
}

export const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const MainApp = () => {
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer
            />
        </Provider>
    </BrowserRouter>
}
export default MainApp
/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
const PContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
export default PContainer*/
