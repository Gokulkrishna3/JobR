import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import { useMemo } from 'react';


export const useStore = () => {
  const store = useMemo(() => configureStore({
    reducer: rootReducer,
  }), []);
  return store;
};

export const useAppDispatch = () => useDispatch();
