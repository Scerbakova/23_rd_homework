import { useState } from 'react';
import AnimalCard from './AnimalCard';
import Button from './Button';
import Header from './Header';
import Modal from './Modal';

const Animals = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="animal__wrapper">
      <Header />
      <div>
        <AnimalCard
          image="https://cdn.shopify.com/s/files/1/0140/9096/0953/files/friendsofwilliamwalker_BreedProfileYorkshireTerrier1zu1.jpg?v=1628603293"
          name="Animal Name"
          species="Animal Species"
        />
      </div>
      <div className="add__animals">
        <Button
          onAdd={() => setModalActive(true)}
        >
          <span>Add Animals</span>
        </Button>
      </div>
      <Modal active={modalActive} setActive={() => setModalActive(false)} />
    </div>
  );
};

export default Animals;
