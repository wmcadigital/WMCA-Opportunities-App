import React, { useContext, useEffect } from 'react';
import { StateContext } from '../GlobalContex';

import filterArray from '../utils/filterArray';

import arraysearch from 'arraysearch/finder';

const ResultsAll = () => {
  const data = useContext(StateContext);
  console.log(data);

  const filterKeysForId = data.state.filterKeysForId;
  const allJobs = data.state.allJobs;
  const selectedJobs = data.state.selectedJobs
  // const idsToDisplay = [];
  let testIt = []

  function test() {
    const idsToDisplay = [];
    if (selectedJobs.length === 0) {
return allJobs;
    }else {
      selectedJobs.forEach((job)=>{
        for (var key in filterKeysForId){
          if(filterKeysForId.hasOwnProperty(key)){
              //console.log(filterKeysForId[key])
              if(filterKeysForId[key].indexOf(job) > -1) {
                idsToDisplay.push(key); 
              }
            }
          }  
      });
    }
    

    const unique = new Set(idsToDisplay.flat())
    return [...unique];
  }


  useEffect(() => {
    testIt = test();
    console.log('data updated');
  }, [data])
  return (
    <div>
      {/* <pre>{JSON.stringify(data.state.selectedJobs, null, 4)}</pre> */}
  <h1>{test().length}</h1>
      <pre>{JSON.stringify(test(), null, 4)}</pre>
    </div>
  );
};

export default ResultsAll;
