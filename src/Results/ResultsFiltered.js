import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../GlobalContex';

import SingleResult from './SingleResult';

const ResultsFiltered = () => {
  const data = useContext(StateContext);
  const selectedJobs = data.state.selectedJobs;
  const [idsToDisplay, setIdsToDisplay] = useState([]);
  const allJobs = data.state.allJobs;
  const filterKeysForId = data.state.filterKeysForId;

  async function getSelectedIds() {
    let ids = []
    selectedJobs.forEach(job => {
      for (var key in filterKeysForId) {
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
    getSelectedIds().then( (res)=> {
      console.log(res)
      setIdsToDisplay(res)
    });
  }, [selectedJobs]);

  return (
    <div>
      <h4>{idsToDisplay.length}</h4>
      {allJobs && idsToDisplay.length > 0 &&
        allJobs.map((single, i) => {
          if (idsToDisplay.indexOf(single.Id.toString()) > -1) {
            return <SingleResult {...single} key={`singleEntryFiltered_${i}`} />;
          }
        })}
    </div>
  );
};

export default ResultsFiltered;
