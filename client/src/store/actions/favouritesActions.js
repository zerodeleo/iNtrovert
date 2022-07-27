import axios from 'axios';
import * as reduxTypes from '../types';

export const setFavourites = ({ favourites }) => (dispatch) => {
  const uid = JSON.parse(localStorage.getItem('uid'));
  console.log('Trying to set favourites in DB, ');
  axios.put(`/api/users/favourites/${uid}`, { favourites })
      .then(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
        console.log('Set localstorage before DB, ', favourites);
      })
      .then(() => dispatch({ type: reduxTypes.SET_FAVOURITES_SUCCESS, payload: favourites }))
      .catch((err) => dispatch({ type: reduxTypes.SET_FAVOURITES_ERROR, err: err.response.data }));
};

export const getFavourites = () => (dispatch) => {
  const uid = JSON.parse(localStorage.getItem('uid'));
  const favourites = JSON.parse(localStorage.getItem('favourites'));
  if (!favourites) {
    console.log('No favourites in the local storage, trying to get from DB');
    axios.get(`/api/users/favourites/${uid}`)
        .then((res) => {
          console.log('Got favourites from db, ', res.data);
          return res;
        })
        .then((res) => dispatch({ type: reduxTypes.GET_FAVOURITES_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: reduxTypes.GET_FAVOURITES_ERROR, err: err.response.data }));
  } else {
    console.log('Found favourites in local storage, ', favourites);
    dispatch({ type: reduxTypes.GET_FAVOURITES_SUCCESS, payload: favourites });
  }
};
