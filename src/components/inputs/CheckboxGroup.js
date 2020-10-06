import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

function CheckboxGroup(props) {
  const { checkboxValue, parent } = props;

  return (
    <div>
      {parent === 'Opportunity' ? (
        <legend className="wmcads-fe-fieldset__legend">
          <h3 className="wmcads-fe-question">Opportunity</h3>
        </legend>
      ) : (
        ''
      )}
      {parent === 'Category' ? (
        <legend className="wmcads-fe-fieldset__legend">
          <h3 className="wmcads-fe-question">Industry</h3>
        </legend>
      ) : (
        ''
      )}
      {parent === 'Eligibility' ? (
        <legend className="wmcads-fe-fieldset__legend">
          <h3 className="wmcads-fe-question">Are you currently employed?</h3>
        </legend>
      ) : (
        ''
      )}
      {checkboxValue &&
        checkboxValue.map(checkBox => {
          return <Checkbox key={`${parent}_${checkBox}`} name={checkBox} parent={parent} />;
        })}
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
