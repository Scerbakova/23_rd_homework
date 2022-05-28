import { forwardRef } from 'react';

type NameInputProps = {
  onChange: (value: string) => void,
  value: string,
}

const NameInput = forwardRef<HTMLInputElement, NameInputProps>(({ onChange, value }, ref) => (
  <label htmlFor="name">
    <div className="label">
      Name
    </div>
    <input
      value={value}
      required
      ref={ref}
      id="name"
      type="text"
      placeholder="Animal Name"
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
));

export default NameInput;
