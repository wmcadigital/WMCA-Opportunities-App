import React from 'react';

const SingleResult = (props) => {
  const { Name, Where, LiveIn, Age, DateFrom, DateTo, Summary, Url, Opportunity, Category,Eligibility  } = props;
  return (
      <>
      <article className="wdgt">
        <h2>{ Name }</h2>
        <ul>
          <li><span className="highlight">Where it is: </span>{ Where }</li>
          <li><span className="highlight">You need to live in: </span>{ LiveIn }</li>
          <li><span className="highlight">You must be: </span>{ Age }</li>
          <li><span className="highlight">It runs from: </span>{ DateFrom } - {DateTo}</li>
        </ul>
        <p>
          { Summary }
        </p>
        <div className="text-right">
          <p>
            <a className="btn-secondary" href={Url}> Read more</a>
            <i className="icon-link-external icon-large"></i>
          </p>
        </div>
        <div>
          {/* <p>Tags:</p>
          <pre>{JSON.stringify(Opportunity, null, 4)}</pre>
          <pre>{JSON.stringify(Category, null, 4)}</pre>*/}
          {/* <pre>{JSON.stringify(LiveIn, null, 4)}</pre>  */}


        </div>
      </article>
      <hr/>
      </>
  )
}

export default SingleResult;
