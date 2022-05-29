import React, {
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
  addAnimalInfo, addInputValueAsOption, filterAnimals, getAllBreeds,
} from '../store/reducers/animalSlice';
import AnimalCard from './AnimalCard';
import Button from './Button';
import BreedsInput from './form/BreedsInput';
import BreedsInputSelect from './form/BreedsInputSelect';
import ImageInput from './form/ImageInput';
import NameInput from './form/NameInput';

import Header from './Header';
import Modal from './Modal';

const initialData = {
  animalImage: '',
  animalName: '',
  animalBreeds: '',
};

const Animals = () => {
  const breedsInputRef = React.useRef<HTMLInputElement>(null);
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const breedsSelectInputRef = React.useRef<HTMLSelectElement>(null);

  const [modalActive, setModalActive] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [focus, setFocus] = useState(breedsInputRef.current?.focus());

  const dispatch = useDispatch<AppDispatch>();

  const animals = useSelector((state: RootState) => state.animals.animals);
  const input = useSelector((state: RootState) => state.animals.input);
  const breeds = useSelector((state: RootState) => state.animals.breeds);

  useEffect(() => {
    nameInputRef.current?.focus();
    dispatch(getAllBreeds());
  }, [modalActive]);

  return (
    <div className="animal__wrapper">
      <Header />
      <div className="filter__buttons">
        {localStorage.length > 0 && (
        <button
          className="button"
          onClick={() => {
            dispatch(filterAnimals('All Breeds'));
          }}
        >
          All Breeds

        </button>
        )}
        {animals && breeds.map((breed: string) => (
          <div key={Math.random()}>
            <button
              onClick={() => {
                dispatch(filterAnimals(`${breed}`));
              }}
              className="button"
            >
              {breed}

            </button>
          </div>
        ))}
      </div>
      <div className="card__wrapper">
        {localStorage.length === 0 && <div className="no__data">no animals added yet</div>}
        {animals.map((animal: {animalImage: string, animalName: string, animalBreeds: string}) => (
          <div key={Math.random()}>
            <AnimalCard
              image={animal.animalImage}
              name={animal.animalName}
              Breeds={animal.animalBreeds}
            />
          </div>
        ))}
      </div>
      <div className="add__animals">
        <Button
          onAdd={() => {
            setModalActive(true);
            setFormData(initialData);
          }}
        >
          <span>Add Animals</span>
        </Button>
      </div>
      <Modal active={modalActive} setActive={() => setModalActive(false)}>
        <form
          className="from"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addAnimalInfo(formData));
            setModalActive(false);
          }}
        >
          <div className="form__input">
            <NameInput
              ref={nameInputRef}
              value={formData.animalName}
              onChange={
                (value: string) => { setFormData({ ...formData, animalName: value }); }
              }
            />
          </div>
          <div className="form__input">
            <ImageInput
              value={formData.animalImage}
              onChange={
              (value: string) => { setFormData({ ...formData, animalImage: value }); }
              }
            />
          </div>
          <div className="label">
            Breeds
            {' '}
            <span
              onClick={() => {
                if (breedsInputRef.current) {
                  breedsInputRef.current.className = 'breeds__input';
                }
                if (breedsSelectInputRef.current) {
                  breedsSelectInputRef.current.className = 'hidden';
                }
                setFocus(focus);
              }}
              className="add__breeds"
            >
              (add new Breeds)

            </span>
          </div>
          <div className="form__input">
            <BreedsInput
              ref={breedsInputRef}
              value={formData.animalBreeds}
              onChange={
                (value: string) => {
                  setFormData({ ...formData, animalBreeds: value });
                  dispatch(addInputValueAsOption(formData.animalBreeds));
                }
              }
            />
          </div>
          <div className="form__input">
            <BreedsInputSelect
              ref={breedsSelectInputRef}
              value={formData.animalBreeds}
              required={input.length < 1}
              onChange={
              (value: string) => { setFormData({ ...formData, animalBreeds: value }); }
              }
            />
          </div>
          <div className="add">
            <Button onAdd={() => {
              if (breedsInputRef.current) {
                breedsInputRef.current.className = 'hidden';
              }
              if (breedsSelectInputRef.current) {
                breedsSelectInputRef.current.className = 'select';
              }
            }}
            >
              <span>Add</span>
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Animals;
