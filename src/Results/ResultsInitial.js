import React, { useContext } from 'react';
import { StateContext } from '../GlobalContex';
import ResultsHeader from './ResultsHeader';
import SingleResult from './SingleResult';

const ResultsWrapper = () => {
  const data = useContext(StateContext);
  const { allJobs } = data.state;
  
  return (
    <div>
      <ResultsHeader allJobs={allJobs} text="Fetching results..." />
      {allJobs.length > 0 &&
        allJobs.map(single => {
          return (
            <SingleResult
              Name={single.Name}
              Where={single.Where}
              LiveIn={single.LiveIn}
              Age={single.Age}
              DateFrom={single.DateFrom}
              DateTo={single.DateTo}
              Summary={single.Summary}
              Url={single.Url}
              key={`singleEntry_${single.Id}`}
            />
          );
        })}
    </div>
  );
};

export default ResultsWrapper;
