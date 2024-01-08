import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Avatar, Button, Layout, Menu, MenuProps, Space} from "antd";
import AvatarIcon from "../../assets/images/Avatar.png";
import {selectCurrentUserLogin, selectIsAuth} from "../../Redux/auth-selectors";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Redux/Auth-reducer";

const items1: MenuProps['items'] = [{id: 1, text: 'Developers', navigate: 'users'}].map((data) => {
    return {
        key: data.id,
        label: <NavLink to={data.navigate}>
            {data.text}
        </NavLink>
    }
});

export const AppHeader = () => {
    const {Header} = Layout;

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()
    const logoutCallback = () => {
        dispatch(logout())
    }

    return (
        <Header style={{display: 'flex', alignItems: 'center'}}>
            <div className="demo-logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['0']}
                items={items1}
                style={{flex: 1, minWidth: 0}}
            />
            <Space size={16} wrap>
                {
                    isAuth
                        ? <div>
                            <span style={{color: "white"}}>{login}_</span>
                            <Avatar src={<img src={AvatarIcon} alt="avatar"/>}/>
                            <Button onClick={logoutCallback}>Log out</Button>
                        </div>
                        : <Button>
                            <NavLink to={"/login"}>Login</NavLink>
                        </Button>
                }
            </Space>
        </Header>

        /*<header className={s.header}>
            <img src="https://img2.freepng.ru/20180219/vte/kisspng-logo-blue-blue-triangle-irregular-graphics-5a8b9aebce7332.2835631215190986038456.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login } - <button onClick={props.logout}>Log out</button></div>
                    :<NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>*/
    )
}
