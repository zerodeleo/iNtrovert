import * as types from '../types';

// Utils functions
import { sortVenueList } from '../../utils';

import { venuesInitState } from '../initState';

const venuesReducer = (state = venuesInitState, action) => {
  switch (action.type) {
    case types.SET_PREFERENCES_SUCCESS:
      return { ...state, preferences: action.payload, venuesError: null };
    case types.FETCH_API_SUCCESS:
      const venuesList = sortVenueList(action.payload);
      return { ...state, venuesList, preferences: action.preferences, venuesError: null };
    case types.FETCH_API_ERROR:
      return { ...state, venuesError: action.err };
    default:
      return state;
  }
};

export default venuesReducer;
