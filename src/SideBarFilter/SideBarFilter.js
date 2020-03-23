import React from 'react';
// import { StateContext } from '../GlobalContex';
import FilterGroup from './FilterGroup';

function SideBarFilter() {

  const sectionsConfig = [
    {
      name: 'SkillLevel',
      type: 'dropdown',
      dataType: 'string',
      title: 'Skill level'
    },
    {
      name: 'Opportunity',
      type: 'checkbox',
      dataType: 'array',
      title: 'Opportunity'
    },
    {
      name: 'Category',
      type: 'checkbox',
      dataType: 'array',
      title: 'Industry'
    },
    {
      name: 'Eligibility',
      type: 'checkbox',
      dataType: 'array',
      title: 'Are you currently employed?'
    },
    {
      name: 'Age',
      type: 'dropdown',
      dataType: 'string',
      title: 'Age'
    },
    
  ];

  return (
    <div className="container-wide bg-white pad-30">
      <div className="pure-g justify-between">
        <div className="pure-u-1">
          <h2>Filter</h2>
          {sectionsConfig &&
            sectionsConfig.map((filter, i) => {
              return <FilterGroup {...filter} key={`${filter.name}_${i}`} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default SideBarFilter;
