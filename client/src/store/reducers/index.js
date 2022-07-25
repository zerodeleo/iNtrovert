import { combineReducers } from 'redux';
import authReducer from './authReducer';
import venuesReducer from './venuesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  venues: venuesReducer,
});

export default rootReducer;
