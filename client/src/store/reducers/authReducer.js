/* eslint-disable default-param-last */
/* eslint-disable no-console */
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
    default:
      return state;
  }
};

export default authReducer;
