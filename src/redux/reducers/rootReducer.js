import { combineReducers } from '@reduxjs/toolkit';
import { myReducer } from './myReducer';

const rootReducer = combineReducers({
  myReducer: myReducer,
});

export default rootReducer;
