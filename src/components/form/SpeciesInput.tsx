import React from 'react';

const SpeciesInput = () => (
  <label htmlFor="species">
    <div className="label">
      Species
      {' '}
      <span className="add__species">(add new species)</span>
    </div>
    <select className="select" required defaultValue="Animal species" name="species" id="species">
      <option disabled value="Animal species">Animal species</option>
      {/* <option value="husky">Husky</option>
      <option value="york">York</option> */}
    </select>
  </label>
);

export default SpeciesInput;
