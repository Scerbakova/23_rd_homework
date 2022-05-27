import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addAnimalInfo } from '../store/reducers/animalSlice';
import Button from './Button';
import ImageInput from './form/ImageInput';
import NameInput from './form/NameInput';
import SpeciesInput from './form/SpeciesInput';

export type ModalProps = {
  active: boolean,
  setActive: (active: boolean) => void,
}

const initialData = {
  animalImage: '',
  animalName: '',
  animalSpecies: '',
};

const Modal: FC<ModalProps> = ({ active, setActive }) => {
  const [formData, setFormData] = useState(initialData);
  const dispatch = useDispatch<AppDispatch>();

  console.log(formData);
  return (
    <div onClick={() => setActive(false)} className={active ? 'modal active' : 'modal'}>
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        <form
          className="from"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addAnimalInfo(formData));
          }}
        >
          <div className="form__input">
            <NameInput
              value={formData.animalName}
              onChange={
                (value: string) => { setFormData({ ...formData, animalName: value }); }
              }
            />
          </div>
          <div className="form__input">
            <ImageInput />
          </div>
          <div className="form__input">
            <SpeciesInput />
          </div>
          <div className="add">
            <Button onAdd={() => {}}>
              <span>Add</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
