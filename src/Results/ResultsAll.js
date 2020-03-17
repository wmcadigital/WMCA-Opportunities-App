import React, { useContext, useEffect } from 'react';
import { StateContext } from '../GlobalContex';

const ResultsAll = () => {
  const data = useContext(StateContext);
  //console.log(data);
  // function filterArray(array, filters) {
  //   const filterKeys = Object.keys(filters);
  //   return array.filter(item => {
  //     // validates all filter criteria
  //     return filterKeys.every(key => {
  //       // ignores non-function predicates
  //       if (typeof filters[key] !== 'function') return true;
  //       return filters[key](item[key]);
  //     });
  //   });
  // }

  useEffect(() => {
    
    // const filters = {
    //   Opportunity: size => size === 50 || size === 70,
    //   Eligibility: color => ['blue', 'black'].includes(color.toLowerCase()),
    //   Age: locations => locations.find(x => ['JAPAN', 'USA'].includes(x.toUpperCase())),
    //   SkillLevel: details => details.length < 30 && details.width >= 70,
    //   Category

    // };
    // filterArray()
    //Opportunity, Eligibility, Age, SkillLevel, Category
  }, [])



  return (
    <div>
      <pre>{JSON.stringify(data.state.selectedJobs, null, 4)}</pre>
    </div>
  );
};

export default ResultsAll;
