import React from "react";
import {
    addMessageTextAC,
    dialogsArrayType,
    messagesArrayType,
    updateNewMessageTextAC
} from "../../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../Redux/Redux-store";
import {Redirect} from "react-router-dom";

type CommonType = MSTP & MDTP

type MSTP = {
    dialogs: Array<dialogsArrayType>,
    messages: Array<messagesArrayType>,
    newMessageText: string,
    isAuth: boolean
}
type MDTP = {
    addMessage: () => void,
    onChangeMessageText: (text: string) => void
}

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageTextAC())
        },
        onChangeMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

let AuthRedirectComponent = (props: CommonType) => {
    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer