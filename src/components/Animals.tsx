import React, { useState } from 'react';
import Modal from './Modal';

const Animals = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <button onClick={() => setModalActive(true)}>Add Animals</button>
      <Modal active={modalActive} setActive={() => setModalActive(false)} />
    </div>
  );
};

export default Animals;
