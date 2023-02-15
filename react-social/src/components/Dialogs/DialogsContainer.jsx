import React from "react";
import {addNewMessageActionCreator, updateNewMessageBodyActionCreator,} from "../Redux/DialogsPage-reduce";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import store from "../Redux/store";


let MapStateToPropsDialogs = (state) => {
    return {
        state: state.dialogsPage
    }
}
let MapDispatchToPropsDialogs = (dispatch) => {
    return {
        onNewMessageChanged: (text)=> {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        onSendMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(MapStateToPropsDialogs,MapDispatchToPropsDialogs)(Dialogs);
export default DialogsContainer;
