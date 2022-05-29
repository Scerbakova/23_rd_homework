import { forwardRef } from 'react';

type ImageInputProps = {
  onChange: (value: string) => void,
  value: string,
}

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(({ onChange, value }, ref) => (
  <label htmlFor="image">
    <div className="label">
      Image
    </div>
    <input
      required
      ref={ref}
      id="image"
      type="text"
      placeholder="Animal Image"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
));

export default ImageInput;
