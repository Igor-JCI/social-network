import React, {ComponentType} from "react";
import {
    addMessageTextAC,
    dialogsArrayType,
    messagesArrayType,
} from "../../Redux/Dialogs-reducer";
import {Dialogs, NewMessageFormValuesType} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../Redux/Redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type CommonType = MSTP & MDTP

export type MSTP = {
    dialogs: Array<dialogsArrayType>,
    messages: Array<messagesArrayType>,
    isAuth: boolean
}

// type MSTP = ReturnType<typeof mapStateToProps>

export type MDTP = {
    addMessage: (newMessageText: string) => void
}

let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newMessageText:string) => {
            dispatch(addMessageTextAC(newMessageText))
        },
    }
}


export default compose< ComponentType >(
    connect<MSTP, MDTP, {}, RootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


/*
let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer*/
