const UPDATE_NEW_MESSAGE_BODY = 'updatenewmessagebody';
const ADD_NEW_MESSAGE = 'addnewmessage';

let initialState = {
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
        {id: 4, message: 'shalom'},
        {id: 5, message: 'You are real programmer'},
        {id: 6, message: 'where are you?'}
    ],
    newMessageBody: '',
};

let dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case ADD_NEW_MESSAGE:
            let message = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{id: 6, message: message} ]
            };
        default:
            return state;
    }
}
export default dialogReducer;


export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageBodyActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});
