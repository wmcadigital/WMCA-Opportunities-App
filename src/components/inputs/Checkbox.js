import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DispatchContext, StateContext } from '../../GlobalContex';

function Checkbox(props) {
  const { name, parent } = props;
  const [isSelected, toggleSelected] = useState();
  const filters = useContext(StateContext);
  const dispatcher = useContext(DispatchContext);
  function updateReducer() {
    let arr = filters.state.selectedJobs;
    if (arr.indexOf(name) < 0) {
      arr = [...arr, name];
    } else {
      arr = arr.filter(el => el !== name);
    }

    dispatcher.dispatch({
      type: 'updateFilters',
      payload: arr
    });
  }
  function onInputChange() {
    toggleSelected(!isSelected);
    updateReducer();
  }
  useEffect(() => {
    if (filters.state.selectedJobs.length === 0) {
      toggleSelected(false);
    }
  }, [filters.state.selectedJobs]);
  return (
    <div className="wmcads-fe-checkboxes">
      <label htmlFor={`${name}_${parent}`} className="wmcads-fe-checkboxes__container">
        {name}
        <input
          className="wmcads-fe-checkboxes__input"
          type="checkbox"
          value={name}
          checked={isSelected}
          onChange={() => {
            onInputChange();
          }}
          id={`${name}_${parent}`}
        />
        <span className="wmcads-fe-checkboxes__checkmark">
          <svg className="wmcads-fe-checkboxes__icon">
            <use xlinkHref="#wmcads-general-icon-checkmark" href="#wmcads-general-icon-checkmark" />
          </svg>
        </span>
      </label>
    </div>
  );
}
export default Checkbox;

Checkbox.propTypes = {
  name: PropTypes.string,
  parent: PropTypes.string
};

Checkbox.defaultProps = {
  name: '',
  parent: ''
};
