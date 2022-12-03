import React from "react";
import {addMessageTextAC, updateNewMessageTextAC} from "../../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../Redux/Redux-store";

export type DialogsContainerPropsType = {
    /* dialogs: Array<DialogsArrayType>
     messages: Array<MessagesArrayType>
     newMessageText: string
     dispatch: (action: ActionsType) => void*/

}

/*export const DialogsContainer = (props: DialogsContainerPropsType) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onChangeMessageText = (text: string) => {
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
}*/

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
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