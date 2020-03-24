import React, { useContext } from 'react';
import { StateContext } from '../GlobalContex';

import ResultsInitial from './ResultsInitial';
import ResultsFiltered from './ResultsFiltered';

const ResultsAll = () => {
  const data = useContext(StateContext);
  const selectedJobs = data.state.selectedJobs;
  const isInData = data.state.isIn

  return (
    <div>
      {selectedJobs && selectedJobs.length === 0 && isInData === null
      ? <ResultsInitial />
      : <ResultsFiltered />
      }
    </div>
  );
};

export default ResultsAll;
