import React from 'react';
import Header from './Header/Header'
import SideBarFilter from './SideBarFilter/SideBarFilter';
import Results from './Results/Results';

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
          </div>
            
          </div>  
        </div>
    </div>
  );
}

export default App;
