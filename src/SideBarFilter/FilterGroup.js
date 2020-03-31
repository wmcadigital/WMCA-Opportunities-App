import React from 'react';
import PropTypes from 'prop-types';
import SingleFilterElement from './SingleFilterElement';

const FilterGroup = props => {
  const { title } = props;

  return (
    <div className="wmca-form wdgt">
      <label className="wmca-form-label">{title}:</label>
      <SingleFilterElement parent={props} />
    </div>
  );
};

export default FilterGroup;

FilterGroup.propTypes = {
  title: PropTypes.string
};

FilterGroup.defaultProps = {
  title: ''
};
