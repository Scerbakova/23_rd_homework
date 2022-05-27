import React from 'react';

const ImageInput = () => (
  <label htmlFor="image">
    <div className="label">
      Image
    </div>
    <input required id="image" type="text" placeholder="Animal Image" />
  </label>
);

export default ImageInput;
