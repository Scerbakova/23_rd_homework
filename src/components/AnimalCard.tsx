import { FC } from 'react';

export type AnimalCardProps = {
  image: string,
  name: string,
  species: string,
}

const AnimalCard: FC<AnimalCardProps> = ({ image, name, species }) => (
  <div className="animal--card__wrapper">
    <img className="image" src={image} alt="Animal" />
    <div>{name}</div>
    <div>{species}</div>
  </div>
);

export default AnimalCard;
