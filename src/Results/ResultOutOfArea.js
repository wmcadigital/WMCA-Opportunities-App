import React from 'react';

const ResultOutOfArea = () => {
  return (
    <div>
      <h3>You live out of our area</h3>
      <p>
        We’re currently providing schemes within the West Midlands county (Birmingham, Coventry,
        Dudley, Sandwell, Solihull, Walsall and Wolverhampton), and your postcode is outside of that
        area.
      </p>
      <p>
        You can use the national resources below to find apprenticeships, training schemes and
        placements.
      </p>

      <h2>Apprenticeships</h2>
      <p>
        <a className="btn-secondary" href="#">
        Find an apprenticeship - GOV.UK
        </a>
        <i className="icon-link-external icon-large"></i>
      </p>
      <p>
        <a className="btn-secondary" href="#">
        Apprentice Finde
        </a>
        <i className="icon-link-external icon-large"></i>
      </p>

      <h2>Training schemes</h2>
      <p>
        <a className="btn-secondary" href="#">
          Construction Gateway
        </a>
        <i className="icon-link-external icon-large"></i>
      </p>
      <p>
        <a className="btn-secondary" href="#">
          Find a training scheme
        </a>
        <i className="icon-link-external icon-large"></i>
      </p>

      <h2>Work placements</h2>
      <p>
        <a className="btn-secondary" href="#">
          Construction Gateway
        </a>
        <i className="icon-link-external icon-large"></i>
      </p>
      <p>
        <a className="btn-secondary" href="#">
          Find a training scheme
        </a>
        <i className="icon-link-external icon-large"></i>
      </p>
    </div>
  );
};

export default ResultOutOfArea;
