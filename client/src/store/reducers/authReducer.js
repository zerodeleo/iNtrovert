import * as types from '../types';

const initState = {
  uid: null,
  username: '',
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        uid: action.payload.uid,
        username: action.payload.username,
        authError: null,
      };
    case types.SIGNIN_USER_ERROR:
      return {
        ...state,
        authError: action.err,
      };
    case types.SIGNUP_USER_SUCCESS: 
    return { ...state, username: action.payload.username, uid: action.payload.uid, authError: null};
    case types.SIGNUP_USER_ERROR:
      return { ...state, authError: action.payload }
    default:
      return state;
  }
};

export default authReducer;
