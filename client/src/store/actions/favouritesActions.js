import axios from 'axios';
import * as reduxTypes from '../types';

export const setFavourites = ({ favourites }) => (dispatch) => {
  const uid = JSON.parse(localStorage.getItem('uid'));
  axios.put(`/api/users/favourites/${uid}`, { favourites })
      .then(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
      })
      .then(() => dispatch({ type: reduxTypes.SET_FAVOURITES_SUCCESS, payload: favourites }))
      .catch((err) => dispatch({ type: reduxTypes.SET_FAVOURITES_ERROR, err: err.response.data }));
};

export const getFavourites = () => (dispatch) => {
  const uid = JSON.parse(localStorage.getItem('uid'));
  const favourites = JSON.parse(localStorage.getItem('favourites'));
  if (!favourites) {
    axios.get(`/api/users/favourites/${uid}`)
        .then((res) => dispatch({ type: reduxTypes.GET_FAVOURITES_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: reduxTypes.GET_FAVOURITES_ERROR, err: err.response.data }));
  } else {
    dispatch({ type: reduxTypes.GET_FAVOURITES_SUCCESS, payload: favourites });
  }
};
