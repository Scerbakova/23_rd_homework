import { createSlice } from '@reduxjs/toolkit';

export const animalSlice = createSlice({
  name: 'shop',
  initialState: {
    items: [],
  },
  reducers: {
    addAnimal: (state, action) => {

    },
  },
});

export const {
  addAnimal,
} = animalSlice.actions;

export default animalSlice.reducer;
