import * as types from '../types';

const editPreferences = (preferences) => (dispatch) => {
  dispatch({ type: types.EDIT_PREFERENCES_SUCCESS, payload: preferences });
};

export default editPreferences;
