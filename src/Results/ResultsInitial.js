import React, { useContext } from 'react';
import { StateContext } from '../GlobalContex';
import ResultsHeader from './ResultsHeader'

import SingleResult from './SingleResult';

const ResultsWrapper = () => {
  const data = useContext(StateContext);
  const allJobs = data.state.allJobs;
  return (
    <div>
      <ResultsHeader allJobs={allJobs} />
      {allJobs.length > 0 &&
        allJobs.map((single, i) => {
          return <SingleResult {...single} key={`singleEntry_${i}`} />;
        })}
    </div>
  );
};

export default ResultsWrapper;
