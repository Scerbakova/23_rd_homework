import { configureStore } from '@reduxjs/toolkit';
import animalSlice from './store/reducers/animalSlice';

export const store = configureStore({
  reducer: {
    shop: animalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
