import axios from 'axios';
import * as types from '../types';

export const signIn = (newUser) => (dispatch) => {
  const username = newUser.username;
  const password = newUser.password;

  axios.post(`/api/users/signin`, { username, password })
    .then(res => {
      localStorage.setItem('uid', JSON.stringify(res.data.uid));
      return res;
    })
    .then(res => dispatch({ type: types.SIGNIN_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: types.SIGNIN_USER_ERROR, err: err.response.data }))
};

export const signInWithLocalStorage = () => (dispatch) => {
  const uid = JSON.parse(localStorage.getItem('uid'));

  if (uid) {
    axios.get(`/api/users/${uid}`)
      .then(res => dispatch({ type: types.SIGNIN_USER_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: types.SIGNIN_USER_ERROR, err: err.response.data }))
  }
};
