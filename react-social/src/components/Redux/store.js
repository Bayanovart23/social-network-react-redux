import profileReducer from "./ProfilePage-reducer";
import dialogReducer from "./DialogsPage-reduce";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 33},
                {id: 2, message: 'How are you ', likesCount: 12},
                {id: 3, message: 'yo', likesCount: 21},
                {id: 4, message: 'salam', likesCount: 16},
                {id: 5, message: 'You are real programmer', likesCount: 5},
                {id: 6, message: 'where are you?', likesCount: 3},
            ],
            newTextArea: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Inessa'},
                {id: 3, name: 'Misha'},
                {id: 4, name: 'Yan'},
                {id: 5, name: 'Timur'},
                {id: 6, name: 'Arseniy'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you '},
                {id: 3, message: 'yo'},
                {id: 4, message: 'salam'},
                {id: 5, message: 'You are real programmer'},
                {id: 6, message: 'where are you?'}
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
