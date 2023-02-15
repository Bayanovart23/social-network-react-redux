import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "../new/DialogsItem/DialogItem";
import Message from "../new/Message/Message";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map((d, index) => <DialogItem name={d.name} key={index} id={d.id}/>);
    let messagesItem = props.state.messages.map((m, index) => <Message message={m.message} key={index} id={m.id}/>);
    let newMessageText = props.state.newMessageBody;
    let addNewMessage = () => {
        props.onSendMessage();
    }
    let messageChangedArea = (e) => {
        let text = e.target.value;
        props.onNewMessageChanged(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messagesItems}>
                {messagesItem}
                <div className={classes.sendMessageItem}>
                    <textarea onChange={messageChangedArea} value={newMessageText}></textarea>
                    <button onClick={addNewMessage}> Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
