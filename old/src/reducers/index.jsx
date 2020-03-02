import { combineReducers } from "redux";

// import reducers
import blogReducer from "./blog.reducer";

// combines independent parts of the state tree
// and reduces to a single reducing function to pass into createStore
export default combineReducers({
  blogs: blogReducer
});
