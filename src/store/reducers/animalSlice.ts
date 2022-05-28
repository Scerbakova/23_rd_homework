import { createSlice } from '@reduxjs/toolkit';

export const animalSlice = createSlice({
  name: 'animal',
  initialState: {
    animals: localStorage.getItem('animals') ? JSON.parse(localStorage.getItem('animals') || '[]') : [] as object[],
    input: [] as string[],
  },
  reducers: {
    addAnimalInfo: (state, action) => {
      state.animals = [...state.animals, action.payload];
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
    addInputValueAsOption: (state, action) => {
      state.input = [...state.input, action.payload];
    },
    filterAnimals: (state, action) => {
      const filtered = state.animals.filter(
        (animal: {
          animalImage: string, animalName: string, animalBreeds: string
        }) => animal.animalBreeds === action.payload,
      );
      state.animals = filtered;
    },
  },
});

export const {
  addAnimalInfo, addInputValueAsOption, filterAnimals,
} = animalSlice.actions;

export default animalSlice.reducer;
