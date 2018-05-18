const initialState = {
    username: '',
    profile: '',
    userId: 0
}

//Actions
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';

//Action Creators
export function updateUserInfo(userObject) {
    // console.log(userObject);
    // console.log(userObject.id);
    // console.log(userObject.profile_pic);
    return {
        type: UPDATE_USER_INFO,
        payload: {
            username: userObject.username,
            profile: userObject.profile_pic,
            userId: userObject.id
        }
    }
}

export function clearUserInfo() {
    return {
        username: '',
        profile: '',
        userId: 0
    }
}


//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            console.log(`Current action.payload: `,action.payload)
            return (
                Object.assign({}, state, { username: action.payload.username, profile: action.payload.profile, userId: action.payload.userId })
            )
        case CLEAR_USER_INFO:
            return Object.assign({}, state, { state: action.payload });
        default:
            return state;
    }
}