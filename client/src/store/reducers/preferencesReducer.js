import * as types from '../types';

import { preferencesInitState } from '../initState';

const preferencesReducer = (state = preferencesInitState, action) => {
  switch (action.type) {
    case types.EDIT_PREFERENCES_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};

export default preferencesReducer;
