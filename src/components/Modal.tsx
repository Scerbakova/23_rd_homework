import { FC } from 'react';

export type ModalProps = {
  active: boolean,
  setActive: (active: boolean) => void,
}

const Modal: FC<ModalProps> = ({ active, setActive, children }) => (
  <div onClick={() => setActive(false)} className={active ? 'modal active' : 'modal'}>
    <div onClick={(e) => e.stopPropagation()} className="modal__content">
      {children}
    </div>
  </div>
);

export default Modal;
