import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsArrayType, MessagesArrayType} from "../../App";
import {Redirect} from "react-router-dom";


export type DialogsPropsType = {
    dialogs: Array<DialogsArrayType>
    messages: Array<MessagesArrayType>
    newMessageText: string
    addMessage: () => void
    onChangeMessageText: (text: string) => void,
    isAuth:boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        if (text) {
            props.onChangeMessageText(text)
        }

    }
    const onAddMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
                }
            </div>

            <div className={s.messages}>
                {
                    props.messages.map(m => <Message message={m.message} key={m.id}/>)
                }
                <div>
                    <textarea value={props.newMessageText} onChange={onChangeMessageText}
                              placeholder="Enter your message"></textarea>
                    <button onClick={onAddMessage}>addMessage</button>
                </div>
            </div>

        </div>
    )
}