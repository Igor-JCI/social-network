import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {message} from "antd";

type DialogItemPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    message:string
}

export const DialogItem = (props: DialogItemPropsType) => {
    /*let path = "/dialogs/" + props.id*/
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props:MessagePropsType) => {
  return(
      <div className={s.message}>{props.message}</div>
  )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrei" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valera" id="6"/>

            </div>

            <div className={s.messages}>

                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>

              {/*  <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>*/}
            </div>

        </div>
    )
}