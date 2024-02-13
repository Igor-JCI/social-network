import React, {ComponentType, useEffect} from 'react';
import './App.css';
import {BrowserRouter, HashRouter, NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import store, {RootStateType} from "./Redux/Redux-store";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import {Preloader} from "./components/Common/Preloader/Preloader";
import {LaptopOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {AppHeader} from "./components/Header/Header";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
const ContainerForUsersComponent = React.lazy(() => import("./components/Users/UsersContainer"));
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

const {Content, Footer, Sider} = Layout;


const items2: MenuProps['items'] = [
    {
        icon: UserOutlined, text: 'My Profile', id: 1, options:
            [
                {id: 1, text: 'Profile', navigate: 'profile'},
                {id: 2, text: 'Messages', navigate: 'dialogs'},
                {id: 3, text: 'Users', navigate: 'users'},
            ]
    },

    {
        icon: LaptopOutlined, text: 'Common', id: 2, options: [
            {id: 1, text: 'News', navigate: 'News'},
            {id: 2, text: 'Music', navigate: 'Music'},
            {id: 3, text: 'Settings', navigate: 'Settings'}
        ]
    }].map(
    (data, index) => {

        return {
            key: data.id,
            icon: React.createElement(data.icon),
            label: data.text,
            children: data.options.map((option, j) => {
                return {
                    key: option.id,
                    label: <NavLink to={option.navigate}>
                        {option.text}
                    </NavLink>,
                };
            }),
        };
    },
);


const App = (props: CommonType) => {

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) {
        <Preloader/>
    }
    return (
        <HashRouter>
            <Layout>
                <AppHeader/>
                <Content style={{padding: '0 48px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout
                        style={{padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG}}
                    >
                        <Sider
                            style={{background: colorBgContainer}}
                            width={200}>
                            <Menu
                                mode="inline"
                                /*defaultSelectedKeys={['1']}*/
                                /*defaultOpenKeys={['sub1']}*/
                                style={{height: '100%'}}
                                items={items2}
                            />
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route path="/dialogs" render={() => {
                                    return <React.Suspense fallback={<Preloader/>}>
                                        <DialogsContainer/>
                                    </React.Suspense>
                                }}/>
                                <Route exact path="/" render={() => <Redirect from="/" to="/profile"/>}/>

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
                                <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>

                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Social Network ©{new Date().getFullYear()} Created by Igor Anisimov
                </Footer>
            </Layout>

        </HashRouter>
    )

}

const mapStateToProps = (state: RootStateType): MSTP => {
    return {
        initialized: state.app.initialized
    }
}
export const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp
