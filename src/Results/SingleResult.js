import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const SingleResult = props => {
  const { Name, Where, LiveIn, Age, DateFrom, DateTo, Summary, Link } = props;
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
            {moment(DateFrom).format('D MMMM YYYY')} - {moment(DateTo).format('D MMMM YYYY')}
          </li>
        </ul>
        <p>{Summary}</p>
        <div className="text-right">
          <p>
            <a className="btn-secondary" href={Link} target="_blank" rel="noopener noreferrer">
              Find out more about the {Name} course
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
  Link: PropTypes.string
};

SingleResult.defaultProps = {
  Name: '',
  Where: '',
  LiveIn: '',
  Age: '',
  DateFrom: '',
  DateTo: '',
  Summary: '',
  Link: ''
};
