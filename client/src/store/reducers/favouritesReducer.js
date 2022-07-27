import * as types from '../types';

// Utils functions
import { sortVenueList } from '../../utils';

import { favouritesInitState } from '../initState';

const favouritesReducer = (state = favouritesInitState, action) => {
  switch (action.type) {
    case types.SET_FAVOURITES_SUCCESS:
      const favourites = sortVenueList(action.payload);
      return { ...state, favourites, favouritesError: null };
    case types.SET_FAVOURITES_ERROR:
      return { ...state, favouritesError: action.err };
    case types.GET_FAVOURITES_SUCCESS:
      return { ...state, favourites: action.payload, favouritesError: null };
    case types.GET_FAVOURITES_ERROR:
      return { ...state, favouritesError: action.err };
    default:
      return state;
  }
};

export default favouritesReducer;
