import React, { useState, useContext } from 'react';
import updateFiltersHelper from '../utils/updateFilters';
import { DispatchContext, StateContext } from '../GlobalContex';

const Filter = props => {
  const { name, parent } = props;
  const dispatcher = useContext(DispatchContext);
  const filters = useContext(StateContext);
  const [isSelected, setSelected] = useState(true);
  const dispatchType = isSelected ? 'removeFilterElement' : 'addFilterElement';

  const isArray = Array.isArray(filters.state[parent]);

  function onInputChange() {
    setSelected(!isSelected);
    updateFiltersHelper(filters.state.selectedJobs, name, dispatchType).then(res => {
      dispatcher.dispatch({ type: 'updateFilters', payload: res });
    });
    dispatchIt();
  }
  function dispatchIt() {
    let payloadVal;
    if(isArray) {
      payloadVal = dispatchArray();
    } else {
      payloadVal = name;
    }
    


    dispatcher.dispatch({
      type:'updateSingleFilter',
      payload: {
        filterName:parent,
        filter: payloadVal
      }
    })
  }

  function dispatchArray() {
    let arr = filters.state[parent];
    if ( arr.indexOf(name) < 0) {
      arr = [...arr, name];
    } else {
      arr = arr.filter( el => el !== name )
    }

    return arr
  }

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type="checkbox"
        value={name}
        checked={isSelected}
        onChange={() => {
          onInputChange();
        }}
      />
    </div>
  );
};

export default Filter;
