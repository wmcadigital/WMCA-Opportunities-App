import React from "react";
import ReactDOM from "react-dom";

// import redux packages
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as serviceWorker from "./serviceWorker";

// import reducers
import reducers from "./reducers";

// import components
import App from "./components/app";

// setup redux devtools for browser
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create a store that holds the complete state tree of app, apply middleware to sit between dispatch and reducers
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("peoplesStories")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
