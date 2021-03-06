import React from 'react';
import PropTypes from 'prop-types';
import ResultsHeader from './ResultsHeader';
import SingleResult from './SingleResult';

const ResultsAll = props => {
  const { idsToDisplay, allJobs } = props;
  return (
    <div>
      <ResultsHeader allJobs={idsToDisplay} text="Searching..." />
      {allJobs &&
        idsToDisplay.length > 0 &&
        allJobs.map(single => {
          return (
            idsToDisplay.indexOf(single.Id.toString()) > -1 && (
              <SingleResult
                Name={single.Name}
                Where={single.Where}
                LiveIn={single.LiveIn}
                Age={single.Age}
                DateFrom={single.DateFrom}
                DateTo={single.DateTo}
                Summary={single.Summary}
                Link={single.Link}
                key={`singleEntryFiltered_${single.Id}`}
              />
            )
          );
        })}
    </div>
  );
};

export default ResultsAll;

ResultsAll.propTypes = {
  idsToDisplay: PropTypes.instanceOf(Array),
  allJobs: PropTypes.instanceOf(Array)
};

ResultsAll.defaultProps = {
  idsToDisplay: [],
  allJobs: []
};
