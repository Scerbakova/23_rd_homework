import React, { FC } from 'react';

type NameInputProps = {
  onChange: (value: string) => void,
  value: string,
}

const NameInput: FC<NameInputProps> = ({ onChange, value }) => (
  <label htmlFor="name">
    <div className="label">
      Name
    </div>
    <input
      value={value}
      required
      id="name"
      type="text"
      placeholder="Animal Name"
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

export default NameInput;
