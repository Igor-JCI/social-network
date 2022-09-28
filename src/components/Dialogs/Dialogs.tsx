import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsArrayType, MessagesArrayType} from "../../App";
import {ActionsType, addMessageTextAC, updateNewMessageTextAC} from "../../Redux/State";

export type DialogsPropsType = {
    dialogs: Array<DialogsArrayType>
    messages: Array<MessagesArrayType>
    newMessageText: string
    dispatch: (action: ActionsType) => void

}

export const Dialogs = (props: DialogsPropsType) => {
    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        if (text) {
            props.dispatch(updateNewMessageTextAC(text))
        }

    }
    const addMessage = () => {
        props.dispatch(addMessageTextAC())
    }

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
                <div>
                    <textarea value={props.newMessageText} onChange={onChangeMessageText}></textarea>
                    <button onClick={addMessage}>addMessage</button>
                </div>
            </div>

        </div>
    )
}