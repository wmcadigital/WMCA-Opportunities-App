import React from 'react'
import ResultsHeader from './ResultsHeader';
import SingleResult from './SingleResult';

const ResultsAll = (props) => {
  const { idsToDisplay, allJobs } = props;
  return (
    <div>
      <ResultsHeader allJobs={idsToDisplay} text={'Searching...'} />
        {allJobs && idsToDisplay.length > 0 &&
          allJobs.map((single, i) => {
            // if (idsToDisplay.indexOf(single.Id.toString()) > -1) {
              return idsToDisplay.indexOf(single.Id.toString()) > -1 && <SingleResult {...single} key={`singleEntryFiltered_${i}`} />;
            // }
          })}
    </div>
  )
}

export default ResultsAll
