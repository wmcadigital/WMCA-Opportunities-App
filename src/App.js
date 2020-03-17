import React, { useEffect, useReducer, useMemo } from 'react';
import Header from './Header/Header';
import SideBarFilter from './SideBarFilter/SideBarFilter';
// import { Results } from './Results/Results';
import Opps from './Opps/Opps';
import data from './fakeOpps.json';
import { DispatchContext, StateContext } from './GlobalContex';

function App() {
  let initialFilterStatus = {
    selected: [],
    allJobs: [],
    selectedJobs: []
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'addCategories':
        return { ...state, allJobs: action.payload };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialFilterStatus);

  useEffect(() => {
    dispatch({ type: 'addCategories', payload: data });
  }, []);
  const dispatchContex = useMemo(
    () => ({
      dispatch
    }),
    [dispatch]
  );

  const stateContex = useMemo(
    () => ({
      state
    }),
    [state]
  );

  return (
    <div className="App">
      <Header />
      <DispatchContext.Provider value={dispatchContex}>
        <StateContext.Provider value={stateContex}>
          <div className="container-wide bg-white pad-30">
            <div className="pure-g justify-between">
              <div className="pure-u-1 pure-u-md-1-4">
                <SideBarFilter />
                <Opps />
              </div>
              <div className="pure-u-1 pure-u-md-5-8" id="stories">
                {/* <Results /> */}
                <h1>Opps Below:</h1>
              </div>
            </div>
          </div>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
