import { forwardRef } from 'react';

type BreedsInputProps = {
  onChange: (value: string) => void,
  value: string,
}

const BreedsInput = forwardRef<HTMLInputElement, BreedsInputProps>(({ onChange, value }, ref) => (
  <div>
    <label htmlFor="name">
      <div className="label">
        <div>
          Name
        </div>
        <input
          className="hidden"
          value={value}
          ref={ref}
          required
          id="name"
          type="text"
          placeholder="Animal Breeds"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </label>
  </div>
));

export default BreedsInput;
