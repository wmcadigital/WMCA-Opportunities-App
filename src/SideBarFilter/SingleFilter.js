import React, { useState, useContext } from 'react';
import updateFiltersHelper from '../utils/updateFilters';
import { DispatchContext, StateContext } from '../GlobalContex';

import Checkbox from '../components/inputs/Checkbox'
import Dropdown from '../components/inputs/Dropdown'
import InputText from '../components/inputs/InputText'

const Filter = props => {
  const { filterName } = props;
  const { name, type, dataType, title } = props.parent
  const dispatcher = useContext(DispatchContext);
  const filters = useContext(StateContext);
  const [isSelected, setSelected] = useState(true);
  const dispatchType = isSelected ? 'removeFilterElement' : 'addFilterElement';

  const isArray = Array.isArray(filters.state[name]);

  function onInputChange() {
    setSelected(!isSelected);
    updateFiltersHelper(filters.state.selectedJobs, filterName, dispatchType).then(res => {
      dispatcher.dispatch({ type: 'updateFilters', payload: res });
    });
    dispatchIt();
  }
  function dispatchIt() {
    let payloadVal;
    if(isArray) {
      payloadVal = dispatchArray();
    } else {
      payloadVal = filterName;
    }
    
    dispatcher.dispatch({
      type:'updateSingleFilter',
      payload: {
        filterName:name,
        filter: payloadVal
      }
    })
  }

  function dispatchArray() {
    

    //return arr
  }

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
