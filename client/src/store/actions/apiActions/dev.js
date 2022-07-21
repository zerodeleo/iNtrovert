import axios from 'axios';
import * as types from '../../types';

export const apiCall = ({ location, type }) => (dispatch) => {
  axios.post('/api/call', { location, type })
      .then((res) => dispatch({ type: types.FETCH_API_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: types.FETCH_API_ERROR, err: err.response.data }));
};
