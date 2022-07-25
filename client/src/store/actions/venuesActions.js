import axios from 'axios';
import * as reduxTypes from '../types';

export const getVenuesList = ({ types }) => (dispatch) => {
  axios.post('/api/venues', { types })
      .then((res) => dispatch({ type: reduxTypes.FETCH_API_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: reduxTypes.FETCH_API_ERROR, err: err.response.data }));
};

export const setPreferences = ({ preferences, uid }) => (dispatch) => {
  axios.post('/api/venues/preferences', { preferences, uid })
      .then((res) => dispatch({ type: reduxTypes.SET_PREFERENCES_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: reduxTypes.SET_PREFERENCES_ERROR, err: err.response.data }));
};
