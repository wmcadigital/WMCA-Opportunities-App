import {
  FETCH_LOADING,
  FETCH_BLOGS,
  FETCH_ELIGIBILITIES,
  FETCH_WHERE,
  FETCH_SKILLLEVELS,
  FETCH_CATEGORIES,
  FETCH_OPPORTUNITIES,
  FETCH_DATE,
  FETCH_SEARCH,
  FETCH_VISIBLERESULTS
} from "../actions/types";

const INTIAL_STATE = {
  getLoading: true,
  getBlogs: null,
  getSkillLevels: null,
  getCategories: null,
  getOpportunities: null,
  getEligibilities: null,
  getWhere: null,
  getDate: null,
  getSearch: "",
  getVisibleResults: 8
};

// state is equal to an empty object by default
// we don't want to mutate the state so must supply this as the first parameter
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    // create a copy of state, and show loading
    case FETCH_LOADING:
      return { ...state, getLoading: action.payload };
    // create a copy of state, set loading to false when blogs have all been fetched
    case FETCH_BLOGS:
      return { ...state, getLoading: false, getBlogs: action.payload };
    case FETCH_SKILLLEVELS:
      return {
        ...state,
        getLoading: false,
        getSkillLevels: Array.from(
          new Set(
            state.getBlogs.ChildPages.map(blog => {
              return blog.SkillLevel;
            })
          )
        )
      };
  
    // copy state and then set category state with unique categories from blogs
    case FETCH_CATEGORIES:
      return {
        ...state,
        getLoading: false,
        getCategories: Array.from(
          new Set(
            state.getBlogs.ChildPages.map(blog => {
              return blog.Category;
            })
          )
        )
      };

      case FETCH_OPPORTUNITIES:
      return {
        ...state,
        getLoading: false,
        getOpportunities: Array.from(
          new Set(
            state.getBlogs.ChildPages.map(blog => {
              return blog.Opportunity;
            })
          )
        )
      };

      case FETCH_WHERE:
      return {
        ...state,
        getLoading: false,
        getWhere: Array.from(
          new Set(
            state.getBlogs.ChildPages.map(blog => {
              return blog.Where;
            })
          )
        )
      };

      case FETCH_ELIGIBILITIES:
      return {
        ...state,
        getLoading: false,
        getEligibilities: Array.from(
          new Set(
            state.getBlogs.ChildPages.map(blog => {
              return blog.Eligibility;
            })
          )
        )
      };

    // copy state and then map dates to state
    case FETCH_DATE:
      return {
        ...state,
        getLoading: false,
        getDate: state.getBlogs.ChildPages.map(blog => {
          return blog.PubDate;
        })
      };
    // copy state and update search term value
    case FETCH_SEARCH:
      return {
        ...state,
        getLoading: false,
        getSearch: action.payload
      };
    // copy state and update visible results value by an integer value
    case FETCH_VISIBLERESULTS:
      return {
        ...state,
        getLoading: false,
        getVisibleResults: state.getVisibleResults + 8
      };
    // return previous state using the 'default' case for any unknown actions
    default:
      return state;
  }
};
