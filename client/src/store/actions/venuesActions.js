import axios from 'axios';
import * as reduxTypes from '../types';

export const getVenuesList = ({ types }) => (dispatch) => {
  axios.post('/api/venues', { types })
      .then((res) => dispatch({ type: reduxTypes.FETCH_API_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: reduxTypes.FETCH_API_ERROR, err: err.response.data }));
};

export const setPreferences = ({ preferences, uid }) => (dispatch) => {
  axios.put(`/api/users/preferences/${uid}`, { preferences })
      .then(() => {
        localStorage.setItem('preferences', JSON.stringify(preferences));
      })
      .then(() => dispatch({ type: reduxTypes.SET_PREFERENCES_SUCCESS, payload: preferences }))
      .catch((err) => dispatch({ type: reduxTypes.SET_PREFERENCES_ERROR, err: err.response.data }));
};

export const getPreferences = () => (dispatch) => {
  const uid = JSON.parse(localStorage.getItem('uid'));
  const preferences = JSON.parse(localStorage.getItem('preferences'));
  if (!preferences) {
    axios.get(`/api/users/preferences/${uid}`)
        .then((res) => dispatch({ type: reduxTypes.GET_PREFERENCES_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: reduxTypes.GET_PREFERENCES_ERROR, err: err.response.data }));
  } else {
    dispatch({ type: reduxTypes.GET_PREFERENCES_SUCCESS, payload: preferences });
  }
};
