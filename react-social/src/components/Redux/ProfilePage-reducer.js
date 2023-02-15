const ADD_POST = 'addpost';
const UPDATE_NEW_TEXT = 'updatenewposttext';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 33},
        {id: 2, message: 'How are you ', likesCount: 12},
        {id: 3, message: 'yo', likesCount: 21},
        {id: 4, message: 'shalom', likesCount: 16},
        {id: 5, message: 'You are real programmer', likesCount: 5},
        {id: 6, message: 'where are you?', likesCount: 3}
    ],
    newTextArea: '',
    profile: null,
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let item = {
                id: 10,
                message: state.newTextArea,
                likesCount: 0
            };
            return {...state,
                newTextArea: '',
                posts: [...state.posts, item],

            };
        }
        case UPDATE_NEW_TEXT: {
            return {...state,
                newTextArea: action.newText,
            };;
        }
        case SET_USER_PROFILE: {
            return {...state,
                profile: action.profile,
            };;
        }
        default: {
            return state;
        }
    }
}

export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, newText: text});
export let addPostActionCreator = () => ({type: ADD_POST});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;
