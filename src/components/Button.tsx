import React, { FC } from 'react';

export type ButtonProps = {
  onAdd: () => void,
}

const Button: FC < ButtonProps > = ({ onAdd, children }) => (
  <div>
    <button onClick={onAdd} className="button">
      {children}
    </button>
  </div>
);

export default Button;
