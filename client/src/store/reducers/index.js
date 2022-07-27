import { combineReducers } from 'redux';
import authReducer from './authReducer';
import favouritesReducer from './favouritesReducer';
import venuesReducer from './venuesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  venues: venuesReducer,
  favourites: favouritesReducer,
});

export default rootReducer;
