import clubReducer from './clubReducer.js';
import {
  ADD_NEW_CLUB,
  DECREMENT_BAG_SIZE,
  INCREMENT_BAG_SIZE,
  REMOVE_CLUB,
  SET_NEW_CLUB_VALUE } from '../constants/constants';


const initialState = {
  bag: {
    driver: [],
    woods: [],
    hybrids: [],
    irons: [],
    wedges: [],
    putter: []
  },
  bagSize: 0,
  newClub: {
    category: '',
    type: '',
    brand: ''
  }
};

function rootReducer(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {
    case `${ADD_NEW_CLUB}`:
      return clubReducer(newState, action);
    case `${DECREMENT_BAG_SIZE}`:
      newState.bagSize -= action.payload;
      return newState;
    case `${INCREMENT_BAG_SIZE}`:
      newState.bagSize += action.payload;
      return newState;
    case `${REMOVE_CLUB}`:
      return clubReducer(newState, action);
    case `${SET_NEW_CLUB_VALUE}`:
      return clubReducer(newState, action);
    default:
      return state
  }
};

export default rootReducer;