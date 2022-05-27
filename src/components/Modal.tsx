import React, { FC } from 'react';

export type ModalProps = {
  active: boolean,
  setActive: (active: boolean) => void,
}

const Modal: FC<ModalProps> = ({ active, setActive }) => {
  const a = 5;
  return (
    <div onClick={() => setActive(false)} className={active ? 'modal active' : 'modal'}>
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        <form
          className="from"
          onSubmit={(e) => e.preventDefault()}
        >
          <input className="form__input" type="text" placeholder="Animal Name" />
          <br />
          <input className="form__input" type="text" placeholder="Animal Name" />
          <br />
          <input className="form__input" type="text" placeholder="Animal Name" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
