import React from 'react';
import Header from './Header/Header'
import SideBarFilter from './SideBarFilter/SideBarFilter';
import Results from './Results/Results';
import Opps from './Opps/Opps'

function App() {
  return (
    <div className="App">
        <Header />
      
        <div className="container-wide bg-white pad-30">
          <div className="pure-g justify-between">
              
          <div className="pure-u-1 pure-u-md-1-4">
            <SideBarFilter />
          </div>
              
          <div className="pure-u-1 pure-u-md-5-8" id="stories">
            <Results />

            <h1>Opps Below:</h1>
            <Opps />
            
          </div>
            
          </div>  
        </div>
    </div>
  );
}

export default App;
