import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cards: cardReducer,
});

export default rootReducer;
