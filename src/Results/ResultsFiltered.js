import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../GlobalContex';
import ResultsOutOfArea from './ResultOutOfArea';
import ResultsAll from './ResultsAll';

const ResultsFiltered = () => {
  const data = useContext(StateContext);
  const { selectedJobs, filterKeysForId, allJobs } = data.state;
  const [idsToDisplay, setIdsToDisplay] = useState([]);
  async function getSelectedIds() {
    let ids = [];
    selectedJobs.forEach(job => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in filterKeysForId) {
        // eslint-disable-next-line no-prototype-builtins
        if (filterKeysForId.hasOwnProperty(key)) {
          if (filterKeysForId[key].indexOf(job) > -1) {
            ids.push(key);
          }
        }
      }
      const unique = new Set(ids.flat());
      ids = [...unique];
    });
    return ids;
  }

  useEffect(() => {
    getSelectedIds().then(res => {
      setIdsToDisplay(res);
    });
    return () => {
      setIdsToDisplay([]);
    };
  }, [selectedJobs]);

  return (
    <div>
      {idsToDisplay && idsToDisplay.length > 0 ? (
        <ResultsAll idsToDisplay={idsToDisplay} allJobs={allJobs} />
      ) : (
        <ResultsOutOfArea />
      )}
    </div>
  );
};

export default ResultsFiltered;
