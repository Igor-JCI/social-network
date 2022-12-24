import React from "react";
import {addMessageTextAC, updateNewMessageTextAC} from "../../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../Redux/Redux-store";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageTextAC())
        },
        onChangeMessageText: (text:string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer