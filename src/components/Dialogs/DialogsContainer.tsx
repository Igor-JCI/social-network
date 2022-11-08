import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsArrayType, MessagesArrayType} from "../../App";
import {addMessageTextAC, updateNewMessageTextAC} from "../../Redux/Dialogs-reducer";
import {ActionsType} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";

export type DialogsContainerPropsType = {
    dialogs: Array<DialogsArrayType>
    messages: Array<MessagesArrayType>
    newMessageText: string
    dispatch: (action: ActionsType) => void

}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const onChangeMessageText = (text:string) => {
            props.dispatch(updateNewMessageTextAC(text))

    }
    const addMessage = () => {
        props.dispatch(addMessageTextAC())
    }

    return (
        <Dialogs
            dialogs={props.dialogs}
            messages={props.messages}
            newMessageText={props.newMessageText}
            addMessage={addMessage}
            onChangeMessageText={onChangeMessageText}
        />
    )
}