import React, { useState, useContext } from 'react';
import updateFiltersHelper from '../utils/updateFilters';
import { DispatchContext, StateContext } from '../GlobalContex';

import Checkbox from '../components/inputs/Checkbox'
import Dropdown from '../components/inputs/Dropdown'
import InputText from '../components/inputs/InputText'

const Filter = props => {
  const { filterName } = props;
  const { type} = props.parent
  
  function getInput() {
    switch (type) {
      case 'checkbox':
       return <Checkbox filterName={filterName} {...props.parent} />
      case 'dropdown' :
        return <Dropdown filterName={filterName} {...props.parent} />
      default:
        throw new Error();
 
    }
  }

  return (
    <div>
      {getInput()}
    </div>
  );
};

export default Filter;
