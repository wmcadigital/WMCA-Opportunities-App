import axios from "axios";

// import action types
import {
  FETCH_LOADING,
  FETCH_BLOGS,
  FETCH_ELIGIBILITIES,
  FETCH_SKILLLEVELS,
  FETCH_CATEGORIES,
  FETCH_OPPORTUNITIES,
  FETCH_DATE,
  FETCH_SEARCH,
  FETCH_VISIBLERESULTS,
  FETCH_WHERE
} from "./types";

// get the protocol and domain name of the url
const baseUrl = window.location.origin;
// append the api path to the end of the baseUrl, depending on environment
// we're running and the testing the app
const testApiUrl = `${baseUrl}/todeleteopportunities.json`;
//const apiUrl = `${baseUrl}/peoples-stories/api`;

// default load status whilst data is loading
export const fetchLoading = () => {
  return (dispatch, loading) => {
    dispatch({ type: FETCH_LOADING, payload: loading });
  };
};

// export as named function
export const fetchBlogs = () => {
  return async dispatch => {
    const response = await axios
      .get(testApiUrl)
      // chain and return to use later
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      // chain and return if promise was rejected
      .catch(error => {
        console.log(error);
      });
    // dispatch action and trigger state changes to store
    dispatch({ type: FETCH_BLOGS, payload: response });
    dispatch({ type: FETCH_CATEGORIES, payload: response });
    dispatch({ type: FETCH_OPPORTUNITIES, payload: response });
    dispatch({ type: FETCH_SKILLLEVELS, payload: response });
    dispatch({ type: FETCH_ELIGIBILITIES, payload: response });
    dispatch({ type: FETCH_DATE, payload: response });
    dispatch({ type: FETCH_WHERE, payload: response });
  };
};

// set action for search term to dispatch through
export const fetchSearch = searchTerm => ({
  type: FETCH_SEARCH,
  payload: searchTerm
});

// set action for updating visible results to dispatch through
export const fetchVisibleResults = visibleResults => ({
  type: FETCH_VISIBLERESULTS,
  payload: visibleResults
});
