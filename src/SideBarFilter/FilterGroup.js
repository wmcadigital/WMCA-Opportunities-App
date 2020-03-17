import React, { useContext, useState, useEffect } from 'react';
import SingleFilter from './SingleFilter';
import { StateContext } from '../GlobalContex';

import getFilterGroup from '../utils/getFilterGroup';

const FilterGroup = props => {
  const data = useContext(StateContext);
  const { name } = props;
  const [filters, setFilters] = useState([])

  // getFilterGroup(data.state.allJobs, name).then(res => {
  //   setFilters(res);
  // });

  useEffect(() => {
    console.log(name);
    let test = getFilterGroup(data.state.allJobs, name);
    setFilters(test)

  }, [data.state.allJobs, name]);

  return (
    <div>
      <h2>{name}</h2>
      {filters &&
        filters.map(single => {
          console.log(single);
          return <SingleFilter name={single} />;
        })}
    </div>
  );
};

export default FilterGroup;
