import * as types from '../types';

import { apiInitState } from '../initState';

const authReducer = (state = apiInitState, action) => {
  switch (action.type) {
    case types.FETCH_API_SUCCESS:
      return { ...state, venueList: action.payload, apiError: null };
    case types.FETCH_API_ERROR:
      return { ...state, apiError: action.err };
    default:
      return state;
  }
};

export default authReducer;
