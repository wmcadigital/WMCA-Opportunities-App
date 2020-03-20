import React, { useEffect, useReducer, useMemo } from 'react';
import Header from './Header/Header';
import SideBarFilter from './SideBarFilter/SideBarFilter';
import Results from './Results/Results';
// import Opps from './Opps/Opps';
//import data from './fakeOpps.json';

import data from './wholeData.json';
import getAllFiltersForId from './utils/getAllFiltersForId';
import { DispatchContext, StateContext } from './GlobalContex';

function App() {
  /* move all this to global reducer */
  let initialFilterStatus = {
    allJobs: data,
    filterKeysForId: {},
    selectedJobs: [],
    allFilters: [],
    Opportunity: [],
    Eligibility: [],
    Age: '',
    SkillLevel: '',
    Category: []
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'addCategoriesData':
        return { ...state, allJobs: action.payload };
      case 'updateFilters':
        return { ...state, selectedJobs: action.payload };
      case 'updateSingleFilter':
        return { ...state, [action.payload.filterName]: action.payload.filter };
      case 'setFiltersForId':
        return { ...state, filterKeysForId: action.payload };
      case 'setAllFilters':
        return { ...state, allFilters: action.payload };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialFilterStatus);
  /*  end off move all this to global reducer */

  useEffect(() => {
    getAllFiltersForId(data).then(res => {
      dispatch({ type: 'setFiltersForId', payload: res });
    });
  }, []);
  const dispatchContex = useMemo(() => ({ dispatch }), [dispatch]);

  const stateContex = useMemo(() => ({ state }), [state]);

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
