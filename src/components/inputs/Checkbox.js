import React, { useState, useContext } from 'react';
import { DispatchContext, StateContext } from '../../GlobalContex';

function Checkbox(props) {
  const { name, parent } = props;
  const [isSelected, toggleSelected] = useState(false);
  const filters = useContext(StateContext);
  const dispatcher = useContext(DispatchContext);

  function onInputChange() {
    toggleSelected(!isSelected);
    updateReducer()
  }


  function updateReducer() {
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
    <div>
    
      <input
        type="checkbox"
        value={name}
        checked={isSelected}
        onChange={() => {
          onInputChange();
        }}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
export default Checkbox;
