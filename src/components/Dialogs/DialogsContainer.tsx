import React, {ComponentType} from "react";
import {
    addMessageTextAC,
    dialogsArrayType,
    messagesArrayType,
    updateNewMessageTextAC
} from "../../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../Redux/Redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

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


export default compose< ComponentType >(
    connect<MSTP,MDTP,{},RootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


/*
let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer*/
