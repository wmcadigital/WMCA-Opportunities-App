import React, { useContext } from 'react';
import { StateContext } from '../GlobalContex';

import ResultsInitial from './ResultsInitial';
import ResultsFiltered from './ResultsFiltered';

const ResultsAll = () => {
  const data = useContext(StateContext);
  const { selectedJobs, isIn } = data.state;

  return (
    <div>
      {selectedJobs.length === 0 && isIn === null ? <ResultsInitial /> : <ResultsFiltered />}
    </div>
  );
};

export default ResultsAll;
