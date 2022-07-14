import * as types from '../types';

export const addCard = payload => ({ type: types.ADD_CARD, payload });
export const toggleCard = payload => ({ type: types.TOGGLE_CARD, payload });
export const deleteCard = payload => ({ type: types.DELETE_CARD, payload });
export const updateCard = payload => ({ type: types.UPDATE_CARD, payload });
