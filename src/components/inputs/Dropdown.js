import React, { useState, useContext } from 'react';
import { DispatchContext, StateContext } from '../../GlobalContex';

function DropDown(props) {
  const { selectValue, parent } = props;
  const [selectedValue, setSelected] = useState('select');
  const filters = useContext(StateContext);
  const dispatcher = useContext(DispatchContext);

  const { filterName } = props;

  function onSlectedChange(e) {
    setSelected(e.target.value);

    console.log(e.target.value);
    updateReducer(e.target.value);
  }

  // function updateReducer(value) {
  //   dispatcher.dispatch({
  //     type: 'updateSingleFilter',
  //     payload: {
  //       filterName: parent,
  //       filter: value
  //     }
  //   });
  // }
  function updateReducer(name) {
    let arr = filters.state.selectedJobs;
    if ( arr.indexOf(name) < 0) {
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
          <option value="select">
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
                  key={`${select[0]}_${i}`}
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
