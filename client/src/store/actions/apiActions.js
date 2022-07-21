import axios from 'axios';
import * as types from '../types';

const apiCall = ({ location, type }) => (dispatch) => {
  axios.post('/api/call', { location, types })
      .then((res) => dispatch({ type: types.FETCH_API_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: types.FETCH_API_ERROR, err: err.response.data }));
};

export default apiCall;
