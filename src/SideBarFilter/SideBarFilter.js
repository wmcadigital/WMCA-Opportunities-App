import React, {useContext} from 'react';
import { DispatchContext, StateContext } from '../GlobalContex';

function SideBarFilter() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext)

  console.log(state);
  console.log(dispatch);
  return (
    <div className="container-wide bg-white pad-30">
      <div className="pure-g justify-between">
        <div className="pure-u-1 pure-u-md-1-4">
          <h2>Filter</h2>
          All filters will be here
        </div>
      </div>
    </div>
  );
}

export default SideBarFilter;
