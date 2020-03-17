import React, { useState, useContext } from 'react';
import updateFiltersHelper from '../utils/updateFilters'
import { DispatchContext, StateContext } from '../GlobalContex';


const Filter = props => {
  const { name } = props;
  const dispatcher = useContext(DispatchContext);
  const filters = useContext(StateContext);
  const [isSelected, setSelected] = useState(true);
  const dispatchType = isSelected ? 'removeFilterElement' : 'addFilterElement';
  function onInputChange(e) {
    setSelected(!isSelected);

    updateFiltersHelper(filters.state.selectedJobs,name, dispatchType).then(res => {
      dispatcher.dispatch({type:'updateFilters', payload: res })
    })
  }

  return (
    <div>
  <label htmlFor={name}>{name}</label>
    <input
    type='checkbox'
      value={name}
      checked={isSelected}
      onChange={(e) => {
        onInputChange();
      }}
    />
    </div>
  );
};

export default Filter;
