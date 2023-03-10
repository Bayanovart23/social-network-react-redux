import {getFollow, getUnFollow, getApiUsers} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';





let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
};

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return   {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return   {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return { ...state,  totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return { ...state,  isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { ...state, followingInProgress: action.followingInProgress}
        default:  {
            return state;
        }
    }
}

export const acceptFollow = (userId) => ({type: FOLLOW, userId });

export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setUsersTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});

export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const  setFollowingProgress = (isFollowingInProgress) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingInProgress});


export const getsUsers = (currentPage,pageSize) => {
   return  (dispatch)  => {
       dispatch(setFetching(true));
       getApiUsers(currentPage, pageSize).then(data => {
           dispatch(setFetching(false));
           dispatch(setUsers(data.items));
           dispatch(setUsersTotalCount(data.totalCount));
       })
   }
}


export const followFunk = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true));
        getFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptFollow(userId));
            }
            dispatch(setFollowingProgress(false));

        })
    }
};

    export const unFollowFunk = (userId) => {
        return (dispatch) => {
            dispatch(setFollowingProgress(true));
            getUnFollow(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptUnfollow(userId));
                }
                dispatch(setFollowingProgress(false));
            })}};

export default userReducer;
