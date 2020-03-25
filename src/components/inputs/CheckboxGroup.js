import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function CheckboxGroup(props) {
  const { checkboxValue, parent } = props;

  return (
    <div>
      {checkboxValue &&
        checkboxValue.map(checkBox => {
          return <Checkbox key={`${parent}_${checkBox}`} name={checkBox} parent={parent} />;
        })}
      ;
    </div>
  );
}

export default CheckboxGroup;

CheckboxGroup.propTypes = {
  checkboxValue: PropTypes.instanceOf(Array),
  parent: PropTypes.string
};

CheckboxGroup.defaultProps = {
  checkboxValue: [],
  parent: ''
};
