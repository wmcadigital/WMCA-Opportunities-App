import React from 'react';
import PropTypes from 'prop-types';

const SingleResult = props => {
  const { Name, Where, LiveIn, Age, DateFrom, DateTo, Summary, Url } = props;
  return (
    <>
      <article className="wdgt">
        <h3>{Name}</h3>
        <ul>
          <li>
            <span className="highlight">Where it is: </span>
            {Where}
          </li>
          <li>
            <span className="highlight">You need to live in: </span>
            {LiveIn}
          </li>
          <li>
            <span className="highlight">You must be: </span>
            {Age}
          </li>
          <li>
            <span className="highlight">It runs from: </span>
            {DateFrom} - {DateTo}
          </li>
        </ul>
        <p>{Summary}</p>
        <div className="text-right">
          <p>
            <a className="btn-secondary" href={Url}>
              Read more
            </a>
            <i className="icon-link-external icon-large" />
          </p>
        </div>
      </article>
      <hr />
    </>
  );
};

export default SingleResult;

SingleResult.propTypes = {
  Name: PropTypes.string,
  Where: PropTypes.string,
  LiveIn: PropTypes.string,
  Age: PropTypes.string,
  DateFrom: PropTypes.string,
  DateTo: PropTypes.string,
  Summary: PropTypes.string,
  Url: PropTypes.string
};

SingleResult.defaultProps = {
  Name: '',
  Where: '',
  LiveIn: '',
  Age: '',
  DateFrom: '',
  DateTo: '',
  Summary: '',
  Url: ''
};
