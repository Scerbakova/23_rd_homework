import { FC } from 'react';

export type AnimalCardProps = {
  image: string,
  name: string,
  Breeds: string,
}

const AnimalCard: FC<AnimalCardProps> = ({ image, name, Breeds }) => (
  <div className="animal--card__wrapper">
    <img className="image" src={image} alt="Animal" />
    <div>{name}</div>
    <div>{Breeds}</div>
  </div>
);

export default AnimalCard;
