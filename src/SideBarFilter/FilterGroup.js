import React, { useContext, useState, useEffect } from 'react';
import SingleFilter from './SingleFilter';
import { StateContext } from '../GlobalContex';

import getFilterGroup from '../utils/getFilterGroup';

const FilterGroup = props => {
  const data = useContext(StateContext);
  const { name } = props;
  const [allFilters, setFilters] = useState([]);
  const [selectedSubdFilters, toggleSubFilters] = useState([]);

  useEffect(() => {
    setFilters(getFilterGroup(data.state.allJobs, name));
  }, [data.state.allJobs, name]);

  return (
    <div>
      <h2>{name}:</h2>
      {allFilters &&
        allFilters.map((single, i) => {
          return <SingleFilter name={single} parent={name} toggleSubFilters={toggleSubFilters} key={i}/>;
        })}
    </div>
  );
};

export default FilterGroup;
