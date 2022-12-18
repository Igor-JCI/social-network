import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthReducerType} from "../../Redux/Auth-reducer";

type HeaderType = {
    isAuth: boolean,
    login:string
}

const Header = (props:HeaderType) => {
    return (
        <header className={s.header}>
            <img src="https://img2.freepng.ru/20180219/vte/kisspng-logo-blue-blue-triangle-irregular-graphics-5a8b9aebce7332.2835631215190986038456.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :<NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}


export default Header