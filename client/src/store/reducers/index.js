import { combineReducers } from 'redux';
import authReducer from './authReducer';
import apiReducer from './apiReducer';
import preferencesReducer from './preferencesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  api: apiReducer,
  preferences: preferencesReducer,
});

export default rootReducer;
