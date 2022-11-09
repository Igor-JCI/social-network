import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsArrayType, MessagesArrayType} from "../../App";
import {addMessageTextAC, updateNewMessageTextAC} from "../../Redux/Dialogs-reducer";
import {ActionsType} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export type DialogsContainerPropsType = {
   /* dialogs: Array<DialogsArrayType>
    messages: Array<MessagesArrayType>
    newMessageText: string
    dispatch: (action: ActionsType) => void*/

}

export const DialogsContainer = (props: DialogsContainerPropsType) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onChangeMessageText = (text:string) => {
                        store.dispatch(updateNewMessageTextAC(text))

                    }
                    const addMessage = () => {
                        store.dispatch(addMessageTextAC())
                    }
                    return (
                        <Dialogs
                            dialogs={store.getState().dialogsPage.dialogs}
                            messages={store.getState().dialogsPage.messages}
                            newMessageText={store.getState().dialogsPage.newMessageText}
                            addMessage={addMessage}
                            onChangeMessageText={onChangeMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>


    )
}