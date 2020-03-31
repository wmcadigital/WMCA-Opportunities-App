import React, { useState, useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { StateContext } from '../GlobalContex';
import getFilterGroup from '../utils/getFilterGroup';

import CheckboxGroup from '../components/inputs/CheckboxGroup';
import Dropdown from '../components/inputs/Dropdown';
import Input from '../components/inputs/InputText';

const SingleFilter = props => {
  const { parent } = props;
  const { name, type } = parent;
  const [filters, setFilters] = useState([]);
  const data = useContext(StateContext);
  const allJobs = useMemo(() => {
    return data.state.allJobs;
  });

  function getInput() {
    switch (type) {
      case 'checkbox':
        return <CheckboxGroup checkboxValue={filters} parent={name} />;
      case 'dropdown':
        return <Dropdown selectValue={filters} parent={name} />;
      case 'input':
        return <Input parent={name} />;
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    setFilters(getFilterGroup(data.state.allJobs, name));
  }, [allJobs, name]);
  return <div>{getInput()}</div>;
};

export default SingleFilter;

SingleFilter.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  parent: PropTypes.instanceOf(Object)
};

SingleFilter.defaultProps = {
  name: '',
  type: '',
  parent: {}
};
