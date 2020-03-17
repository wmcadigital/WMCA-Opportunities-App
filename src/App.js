import React, { useEffect, useReducer, useMemo } from 'react';
import Header from './Header/Header';
import SideBarFilter from './SideBarFilter/SideBarFilter';
import Results from './Results/ResultsAll';
// import Opps from './Opps/Opps';
import data from './fakeOpps.json';
import getAllFiltersUtil from './utils/getAllFilters';
import { DispatchContext, StateContext } from './GlobalContex';

function App() {
  let initialFilterStatus = {
    allFilters: [],
    allJobs: [],
    selectedJobs: []
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'addCategoriesData':
        return { ...state, allJobs: action.payload };
      case 'updateFilters':
        return { ...state,  selectedJobs: action.payload};

      case 'setAllFilters':
        return { ...state, allFilters: action.payload, selectedJobs: action.payload}
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialFilterStatus);

  useEffect(() => {
    dispatch({ type: 'addCategoriesData', payload: data });
    getAllFiltersUtil(data).then( (res) => {
      dispatch({ type: 'setAllFilters', payload: res });
    });
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
              </div>
              <div className="pure-u-1 pure-u-md-5-8" id="stories">
                <Results />
              </div>
            </div>
          </div>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
