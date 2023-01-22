import React, {ComponentType} from 'react';
import './App.css';
import HContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/NavBar/NavBar";
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import store, {RootStateType} from "./Redux/Redux-store";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import {Preloader} from "./components/Common/Preloader/Preloader";

//import DialogsContainer from "./components/Dialogs/DialogsContainer"
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
//import {Settings} from "./components/Settings/Settings";
const Settings = React.lazy(() => import("./components/Settings/Settings"));
//import {Music} from "./components/Music/Music";
const Music = React.lazy(() => import("./components/Music/Music"));
//import {News} from "./components/News/News";
const News = React.lazy(() => import("./components/News/News"));
//import ContainerForUsersComponent from "./components/Users/UsersContainer";
const ContainerForUsersComponent = React.lazy(() => import("./components/Users/UsersContainer"));
//import LoginPage from "./components/Login/Login";
const LoginPage = React.lazy(() => import("./components/Login/Login"));

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
                        <Route path="/dialogs" render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path="/profile/:userId?"
                               render={() => <React.Suspense fallback={<Preloader/>}> <ProfileContainer/>
                               </React.Suspense>}/>
                        <Route path="/login" render={() => <React.Suspense fallback={<Preloader/>}>
                            <LoginPage/>
                        </React.Suspense>}/>
                        <Route path="/users" render={() => <React.Suspense fallback={<Preloader/>}>
                            <ContainerForUsersComponent/>
                        </React.Suspense>}/>
                        <Route path="/News" render={() => <React.Suspense fallback={<Preloader/>}>
                            <News/>
                        </React.Suspense>}/>
                        <Route path="/Music" render={() => <React.Suspense fallback={<Preloader/>}>
                            <Music/>
                        </React.Suspense>}/>
                        <Route path="/Settings" render={() => <React.Suspense fallback={<Preloader/>}>
                            <Settings/>
                        </React.Suspense>}/>
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer
            />
        </Provider>
    </HashRouter>
}
export default MainApp
/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
const PContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
export default PContainer*/
