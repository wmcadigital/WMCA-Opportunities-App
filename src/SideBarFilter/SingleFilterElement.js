import React, { useState, useContext, useEffect } from 'react';
import { StateContext } from '../GlobalContex';
import getFilterGroup from '../utils/getFilterGroup';

import CheckboxGroup from '../components/inputs/CheckboxGroup'
import Dropdown from '../components/inputs/Dropdown';
import Input from '../components/inputs/InputText'


const SingleFilter = props => {
  const { name, type } = props.parent;
  const [filters, setFilters] = useState([]);
  // const dispatcher = useContext(DispatchContext);
  const data = useContext(StateContext);

  function getInput() {
    switch (type) {
      case 'checkbox':
       return <CheckboxGroup  checkboxValue={filters} parent={name}/>
      case 'dropdown':
        return <Dropdown selectValue={filters} parent={name} />
      case 'input': 
        return <Input parent={name} />
      default:
        throw new Error();
 
    }
  }

  useEffect(() => {
    setFilters(getFilterGroup(data.state.allJobs, name));

  }, [data.state.allJobs, name]);
  return (
    <div>
      {getInput()}
    </div>
  ) 
}

export default SingleFilter