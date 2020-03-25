import React, { useEffect, useReducer, useMemo } from 'react';
import Header from './Header/Header';
import SideBarFilter from './SideBarFilter/SideBarFilter';
import Results from './Results/Results';
import getAllFiltersForId from './utils/getAllFiltersForId';
import { DispatchContext, StateContext } from './GlobalContex';

function App() {
  /* move all this to global reducer */
  const initialFilterStatus = {
    isIn: null,
    isSearching: true,
    allJobs: [],
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
      case 'isInTheCounty':
        return { ...state, isIn: action.payload };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialFilterStatus);
  /*  end off move all this to global reducer */

  useEffect(() => {
    document.body.classList = 'bg-white app-blog';
    fetch(
      'https://beta.wmca.org.uk/what-we-do/productivity-and-skills/opportunities/?alttemplate=findAnOpportunityJSON'
    )
      .then(response => response.json())
      .then(res => {
        dispatch({ type: 'addCategoriesData', payload: res });
        getAllFiltersForId(res).then(response => {
          dispatch({ type: 'setFiltersForId', payload: response });
        });
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
