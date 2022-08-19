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

    let dialogsData = [
        {id:"1", name: "Dimych"},
        {id:"2", name: "Andrei"},
        {id:"3", name: "Sveta"},
        {id:"4", name: "Sasha"},
        {id:"5", name: "Viktor"},
        {id:"6", name: "Valera"},
    ]

    let messagesData = [
        {id:"1", message: "Hi"},
        {id:"2", message: "How is your it-kamasutra?"},
        {id:"3", message: "Yo"},
        {id:"4", message: "Yo"},
        {id:"5", message: "Yo"}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>

            <div className={s.messages}>

                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>


              {/*  <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>*/}
            </div>

        </div>
    )
}