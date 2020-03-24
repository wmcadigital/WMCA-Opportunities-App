import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../GlobalContex';
import ResultsOutOfArea from './ResultOutOfArea';
import ResultsAll from './ResultsAll';

const ResultsFiltered = () => {
  const data = useContext(StateContext);
  const selectedJobs = data.state.selectedJobs;
  const filterKeysForId = data.state.filterKeysForId;
  const allJobs = data.state.allJobs;
  const isInData = data.state.isIn
  const [idsToDisplay, setIdsToDisplay] = useState([]);
  

  async function getSelectedIds() {
    let ids = [];
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
    getSelectedIds().then(res => {
      setIdsToDisplay(res);
    });
    return () => {
      setIdsToDisplay([])
    }
  }, [selectedJobs]);

  return (
    
    <div>
      {console.log('isInDataisInDataisInDataisInDataisInDataisInData',isInData)}
      {idsToDisplay && idsToDisplay.length > 0
      ?<ResultsAll  idsToDisplay={idsToDisplay} allJobs={allJobs} /> 
      :<ResultsOutOfArea />
      }

    </div>
  );
};

export default ResultsFiltered;
