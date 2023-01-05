import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MDTP, MSTP} from "./DialogsContainer";


export type DialogsPropsType = MSTP & MDTP

export const Dialogs = (props: DialogsPropsType) => {

    const addNewMessage = (values:NewMessageFormValuesType) => {
        props.addMessage(values.newMessageText)
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
            </div>
            <AddMessageFormRedux onSubmit = {addNewMessage}/>
        </div>
    )
}

export type NewMessageFormValuesType = {
    newMessageText: string
}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMessageText" placeholder="Enter your message"/>
        </div>
        <div>
            <button>addMessage</button>
        </div>

    </form>
}

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({form:"dialogAddMessageForm"}) (AddMessageForm)