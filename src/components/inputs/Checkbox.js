import React, { useState, useContext } from 'react';
import { DispatchContext, StateContext } from '../../GlobalContex';

function Checkbox(props) {
  const { name } = props;
  const [isSelected, toggleSelected] = useState(false);
  const filters = useContext(StateContext);
  const dispatcher = useContext(DispatchContext);

  function onInputChange() {
    toggleSelected(!isSelected);
    updateReducer();
  }

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

  return (
    <div className="wmca-form">
      <span className="wmca-form__checkboxes pure-u-1">
        <label htmlFor={name} className="wmca-form__checkboxes-label">
          {name}
          <input
            type="checkbox"
            value={name}
            checked={isSelected}
            onChange={() => {
              onInputChange();
            }}
            id={name}
          />
          <span className="wmca-form__checkboxes-checkmark"> </span>
        </label>
      </span>
    </div>
  );
}
export default Checkbox;
