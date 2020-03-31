import React from 'react';
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
      name: 'Age',
      type: 'dropdown',
      dataType: 'string',
      title: 'Age'
    },
    {
      name: 'LiveIn',
      type: 'input',
      dataType: 'string',
      title: 'Postcode - e.g. DY7 4PU'
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
    }
  ];

  return (
    <div className="container-wide bg-white">
      <div className="pure-g justify-between">
        <div className="pure-u-1">
          <h2>Filter</h2>
          {sectionsConfig &&
            sectionsConfig.map(filter => {
              return (
                <FilterGroup
                  name={filter.name}
                  type={filter.type}
                  dataType={filter.string}
                  title={filter.title}
                  key={`${filter.name}_${filter.title}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SideBarFilter;
