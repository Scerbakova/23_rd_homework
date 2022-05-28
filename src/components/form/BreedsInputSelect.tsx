import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type BreedsInputSelectProps = {
  onChange: (value: string) => void,
  value: string,
  required: boolean
}

const BreedsInputSelect = forwardRef<HTMLSelectElement, BreedsInputSelectProps>(
  ({ onChange, value, required }, ref) => {
    const animals = useSelector((state: RootState) => state.animals.animals);

    const breedsArray = animals.map((animal: { animalBreeds: string }) => animal.animalBreeds);
    const breedsWithoutDuplicates = () => breedsArray.filter(
      (breed: string, index: number) => breedsArray.indexOf(breed) === index,
    );

    return (
      <label htmlFor="breeds">
        <select
          ref={ref}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className="select"
          required={required}
          name="breeds"
          id="breeds"
        >
          <option disabled value="">Animal Breeds</option>
          {breedsWithoutDuplicates().map((breed: string) => (
            <option key={Math.random()} value={breed}>{breed}</option>
          ))}
        </select>
      </label>
    );
  },
);

export default BreedsInputSelect;
