import React, { useContext, useState, useEffect } from 'react';
import SingleFilter from './SingleFilter';
import SingleFilterElement from './SingleFilterElement';
import { StateContext } from '../GlobalContex';



const FilterGroup = props => {
  const data = useContext(StateContext);
  const { title } = props;

  return (
    <div>
      <h2>{title}:</h2>
        <SingleFilterElement parent={props} />
    </div>
  );
};

export default FilterGroup;
