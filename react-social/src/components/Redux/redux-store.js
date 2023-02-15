import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./ProfilePage-reducer";
import dialogReducer from "./DialogsPage-reduce";
import sideBarReducer from "./SideBar-reducer";
import usersPageRedusers  from "./UsersPage-redusers";
import authReducer from "./Auth-reducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageRedusers,
    auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store
export default store;

