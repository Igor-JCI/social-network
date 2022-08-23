import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsArrayType, MessagesArrayType} from "../../App";

export type DialogsPropsType = {
    dialogs:Array<DialogsArrayType>
    messages:Array<MessagesArrayType>
}

export const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {
                    props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
                }

            </div>

            <div className={s.messages}>

                {
                    props.messages.map(m => <Message message={m.message}/>)
                }
            </div>

        </div>
    )
}