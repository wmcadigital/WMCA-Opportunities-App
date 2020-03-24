import React from 'react'

const ResultsHeader = (props) => {
  const {allJobs, text} = props;
  return (
    <div>
      {allJobs.length === 0 ? 
      <h2>{text}</h2> : 
      <h2>{allJobs.length > 0 && allJobs.length} results</h2>
      } 
    </div>
  )
}

export default ResultsHeader
