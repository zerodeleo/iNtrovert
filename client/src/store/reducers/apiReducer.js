import * as types from '../types';

// Utils functions
import { sortVenueList } from '../../utils';

import { apiInitState } from '../initState';

const apiReducer = (state = apiInitState, action) => {
  switch (action.type) {
    case types.FETCH_API_SUCCESS:
      const venueList = sortVenueList(action.payload);
      return { ...state, venueList, apiError: null };
    case types.FETCH_API_ERROR:
      return { ...state, apiError: action.err };
    default:
      return state;
  }
};

export default apiReducer;
