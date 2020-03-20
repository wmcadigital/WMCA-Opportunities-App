import React, { useContext } from 'react'
import { StateContext } from '../GlobalContex';

import SingleResult from './SingleResult';

const ResultsWrapper = () => {
  const data = useContext(StateContext);
  const allJobs = data.state.allJobs;
  return (
    <div>
      <h4>{allJobs.length}</h4>
      {allJobs && allJobs.map((single, i) => {
        return (
          <SingleResult {...single} key={`singleEntry_${i}`} />
        )
      })}
    </div>
  )
}

export default ResultsWrapper
