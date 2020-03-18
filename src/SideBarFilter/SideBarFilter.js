import React from 'react';
// import { StateContext } from '../GlobalContex';
import FilterGroup from './FilterGroup';

function SideBarFilter() {

  const sections = [
    'Opportunity', 'Eligibility', 'Age', 'SkillLevel', 'Category'
  ];

  const sections = [
    'Opportunity', 'Eligibility', 'Age', 'SkillLevel', 'Category'
  ];

  return (
    <div className="container-wide bg-white pad-30">
      <div className="pure-g justify-between">
        <div className="pure-u-1 pure-u-md-1-4">
          <h2>Filter</h2>
          {sections &&
            sections.map((filter, i) => {
              return <FilterGroup name={filter} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default SideBarFilter;
