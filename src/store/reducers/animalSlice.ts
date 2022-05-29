import { createSlice } from '@reduxjs/toolkit';

export const animalSlice = createSlice({
  name: 'animal',
  initialState: {
    animals: localStorage.getItem('animals') ? JSON.parse(localStorage.getItem('animals') || '[]') : [] as object[],
    input: [] as string[],
    breeds: [] as string[],
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
      const notFiltered = JSON.parse(localStorage.getItem('animals') || '[]');
      if (action.payload === 'All Breeds') {
        state.animals = notFiltered;
      } else {
        state.animals = notFiltered.filter((animal: { animalBreeds: string
        }) => animal.animalBreeds === action.payload);
      }
    },

    getAllBreeds: (state) => {
      const breedArray = state.animals.map((animal: { animalBreeds: string }) => animal.animalBreeds);
      const breedsWithoutDuplicates = () => breedArray.filter(
        (breed: string, index: number) => breedArray.indexOf(breed) === index,
      );
      state.breeds = breedsWithoutDuplicates();
    },
  },
});

export const {
  addAnimalInfo, addInputValueAsOption, filterAnimals, getAllBreeds,
} = animalSlice.actions;

export default animalSlice.reducer;
