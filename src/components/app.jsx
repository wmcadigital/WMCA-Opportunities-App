import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import BlogList from "./views/bloglist/bloglist";
import BlogArticle from "./views/blogArticle/blogArticle";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/opportunities/" component={BlogList} />
          </Switch>
      </Router>
    </>
  );
};

export default App;
