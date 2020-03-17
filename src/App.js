import React, { useContext, useEffect, useState } from 'react';
import Header from './Header/Header';
import SideBarFilter from './SideBarFilter/SideBarFilter';
import { Results } from './Results/Results';
import Opps from './Opps/Opps';
import data from './fakeOpps.json';
import GlobalContex from './GlobalContex';

function App() {
  const [oppData, setData] = useState({
    selected: [],
    allJobs: [],
    selectedJobs: []
  });
  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="container-wide bg-white pad-30">
        <div className="pure-g justify-between">
          <div className="pure-u-1 pure-u-md-1-4">
            <SideBarFilter />
            <Opps />
          </div>
          <div className="pure-u-1 pure-u-md-5-8" id="stories">
            <Results />
            <h1>Opps Below:</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
