import React from 'react';
import SingleFilterElement from './SingleFilterElement';

const FilterGroup = props => {
  return (
    <div className="wmcads-fe-group">
      <fieldset className="wmcads-fe-fieldset">
        <SingleFilterElement parent={props} />
      </fieldset>
    </div>
  );
};

export default FilterGroup;
