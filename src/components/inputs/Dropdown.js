import React, { useState, useContext } from 'react';
import { DispatchContext, StateContext } from '../../GlobalContex';

function DropDown(props) {
  const  DEFAULT = 'select'
  const { selectValue, parent } = props;
  const [selectedValue, setSelected] = useState('select');
  const filters = useContext(StateContext);
  const dispatcher = useContext(DispatchContext);
  let arr = filters.state.selectedJobs;

  function onSlectedChange(e) {
    arr = arr.filter( el => el !== selectedValue )
    setSelected(e.target.value);
    updateReducer(e.target.value);
  }

  function updateReducer(name) {
    
    if ( arr.indexOf(name) < 0 && name !== DEFAULT) {
      arr = [...arr, name];
    } else {
      arr = arr.filter( el => el !== name )
    }
    
    dispatcher.dispatch({
      type:'updateFilters',
      payload: arr
    })
  }

  return (
    <div className="pure-u-1">
      <div className="wmca-form wdgt">
        <select
          value={selectedValue}
          id={parent}
          onChange={e => {
            onSlectedChange(e);
          }}
        >
          <option value={DEFAULT}>
            Select
          </option>
          {selectValue &&
            selectValue.map((select, i) => {
              return (
                <option
                  onChange={e => {
                    onSlectedChange(e);
                  }}
                  value={select}
                  key={`selectt_${i}`}
                >
                  {select}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default DropDown;
