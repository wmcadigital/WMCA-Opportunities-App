import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DispatchContext, StateContext } from '../../GlobalContex';

function DropDown(props) {
  const DEFAULT = 'select';
  const { selectValue, parent } = props;
  const [selectedValue, setSelected] = useState('select');
  const filters = useContext(StateContext);
  const dispatcher = useContext(DispatchContext);
  let arr = filters.state.selectedJobs;

  function updateReducer(name) {
    if (arr.indexOf(name) < 0 && name !== DEFAULT) {
      arr = [...arr, name];
    } else {
      arr = arr.filter(el => el !== name);
    }
    dispatcher.dispatch({
      type: 'updateFilters',
      payload: arr
    });
  }

  function onSlectedChange(e) {
    arr = arr.filter(el => el !== selectedValue);
    setSelected(e.target.value);
    updateReducer(e.target.value);
  }

  useEffect(() => {
    if (filters.state.selectedJobs.length === 0) {
      setSelected(false);
    }
  }, [filters.state.selectedJobs]);

  return (
    <div className="wmca-form wdgt">
      {parent === 'SkillLevel' ? (
        <label htmlFor={parent} className="wmcads-fe-fieldset__legend">
          <h3 className="wmcads-fe-question">Skill Level</h3>
        </label>
      ) : (
        ''
      )}
      {parent === 'Age' ? (
        <label htmlFor={parent} className="wmcads-fe-fieldset__legend">
          <h3 className="wmcads-fe-question">Age</h3>
        </label>
      ) : (
        ''
      )}
      <select
        value={selectedValue}
        id={parent}
        onChange={e => {
          onSlectedChange(e);
        }}
      >
        <option value={DEFAULT}>Select</option>
        {selectValue &&
          selectValue.map(select => {
            return (
              <option
                onChange={e => {
                  onSlectedChange(e);
                }}
                value={select}
                key={`select_${select}`}
              >
                {select}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default DropDown;

DropDown.propTypes = {
  selectValue: PropTypes.instanceOf(Array),
  parent: PropTypes.string
};

DropDown.defaultProps = {
  selectValue: [],
  parent: ''
};
