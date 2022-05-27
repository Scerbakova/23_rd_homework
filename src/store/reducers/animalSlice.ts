import { createSlice } from '@reduxjs/toolkit';

export const animalSlice = createSlice({
  name: 'animal',
  initialState: {
    animals: localStorage.getItem('animals') ? JSON.parse(localStorage.getItem('animals') || '{}') : [],
  },
  reducers: {
    addAnimalInfo: (state, action) => {
      state.animals = [...state.animals, action.payload];
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
  },
});

export const {
  addAnimalInfo,
} = animalSlice.actions;

export default animalSlice.reducer;
