import React, { Component } from "react";
import { connect } from "react-redux";

// import actions
import {
  fetchLoading,
  fetchBlogs,
  fetchSearch,
  fetchVisibleResults
} from "../../../actions/index";

// import components
import Sidebar from "../../sidebar/sidebar";
import Header from "../../header/header";

import BlogSummary from "../../blogSummary/blogSummary";

class BlogList extends Component {
  componentDidMount() {
    // destructure props
    const { fetchLoading, fetchBlogs } = this.props;

    // display results as soon as we've fetched api is resolved
    fetchLoading();
    fetchBlogs();
  }

  // function is used for the search box,
  // preventing form from submitting on press of enter key
  onFormSubmit = event => {
    event.preventDefault();
  };

  // listen out for any changes to the search box input
  // dispatch and update redux store with value entered
  onChangeInput = event => {
    // destructure props
    const { dispatch } = this.props;
    // prevent search box from submitting any searches
    event.preventDefault();

    // dispatch the action on key change to update the state of search term
    dispatch(fetchSearch(event.target.value));
  };

  infiniteScroll = () => {
    // hold the stories container and the last article in a const variable
    const articleContainer = document.getElementById("stories");
    const lastArticle = document.querySelector(
      "#stories > article:last-of-type"
    );

    // listen out for scroll events
    document.addEventListener("scroll", () => {
      // we're checking if the article is present
      // as we don't want the function to run an error
      if (lastArticle !== null) {
        // check if the article container height minus the window scroll is
        // equal to or less than the last article height
        if (
          articleContainer.scrollHeight - window.scrollY <=
          lastArticle.scrollHeight
        ) {
          // destructure props
          const { dispatch } = this.props;
          // dispatch the action so we can update the number of visible results
          dispatch(fetchVisibleResults());
        }
      }
    });
  };

  renderBlogs() {
    // destructure props
    const { blogs, searchTerm, visibleResults, match, eligibilities, opportunities, skilllevels, age, where } = this.props;

    // set a const variable check if
    // a searchterm has been entered and filter blogs
    const filteredBlogs =
      blogs &&
      blogs.ChildPages
        // order blog childpages by most recent post
        .sort((a, b) => (b.PubDate > a.PubDate ? 1 : -1))
        // filter blog posts if a searchterm has been entered
        .filter(blog => {
          if (searchTerm) {
            const searchValue = searchTerm.toLowerCase();
            return Object.values(blog).some(value =>
              value
                .toString()
                .toLowerCase()
                .includes(searchValue)
            );
          }
          // just return the blog if no searchterm is entered
          return blog;
        })
                // filter this by selected skilllevel in the sidebar links
                .filter(blog => {
                  // we're looking at the match params to see if skilllevel is defined
                  // if it is, we convert the skilllevels in the blog to a string, and lowercase
                  // then check if the array of skilllevels includes/matches that of the params
                  if (match.params.skilllevel !== undefined) {
                    let Array_SkillLevels = [];
                    Array_SkillLevels.push(blog.SkillLevel)
                    return Array_SkillLevels.some(value =>
                      value
                        .toString()
                        .toLowerCase()
                        .includes(match.params.skilllevel)
                    );
                  }
                  // just return all the blogs if params skilllevel is undefined
                  return blog;
                })
        
        // filter this by selected category in the sidebar links
        .filter(blog => {
          // we're looking at the match params to see if category is defined
          // if it is, we convert the categories in the blog to a string, and lowercase
          // then check if the array of categories includes/matches that of the params
          if (match.params.category !== undefined) {
            return Object.values(blog.Category).some(value =>
              value
                .toString()
                .toLowerCase()
                .includes(match.params.category)
            );
          }
          // just return all the blogs if params category is undefined
          return blog;
        })
        .filter(blog => {
          // we're looking at the match params to see if opportunity is defined
          // if it is, we convert the opportunities in the blog to a string, and lowercase
          // then check if the array of opportunities includes/matches that of the params
          if (match.params.opportunity !== undefined) {
            return Object.values(blog.Opportunity).some(value =>
              value
                .toString()
                .toLowerCase()
                .includes(match.params.opportunity)
            );
          }
          // just return all the blogs if params opportunity is undefined
          return blog;
        })
        .filter(blog => {
          // we're looking at the match params to see if category is defined
          // if it is, we convert the categories in the blog to a string, and lowercase
          // then check if the array of categories includes/matches that of the params
          if (match.params.eligibility !== undefined) {
            return Object.values(blog.Eligibility).some(value =>
              value
                .toString()
                .toLowerCase()
                .includes(match.params.eligibility)
            );
          }
          // just return all the blogs if params category is undefined
          return blog;
        })
        .filter(blog => {
          // we're looking at the match params to see if category is defined
          // if it is, we convert the categories in the blog to a string, and lowercase
          // then check if the array of categories includes/matches that of the params
          if (match.params.age !== undefined) {
            return Object.values(blog.Age).some(value =>
              value
                .toString()
                .toLowerCase()
                .includes(match.params.age)
            );
          }
          // just return all the blogs if params category is undefined
          return blog;
        })
        .filter(blog => {
          // we're looking at the match params to see if category is defined
          // if it is, we convert the categories in the blog to a string, and lowercase
          // then check if the array of categories includes/matches that of the params
          if (match.params.where !== undefined) {
            console.log("Running Where filter");
            return Object.values(blog.Where).some(value =>
              value
                .toString()
                .toLowerCase()
                .includes(match.params.where)
            );
          }
          // just return all the blogs if params category is undefined
          return blog;
        });

    // return the data for the const varible set above in filteredBlogs
    return (
      filteredBlogs &&
      // we only want to display as many blogs that are set in the
      // visibleResults state, so we slice the const and map through the data
      filteredBlogs.slice(0, visibleResults).map(blog => {
        return <BlogSummary blog={blog} key={blog.Id} />;
      })
    );
  }

  render() {
    // destructure props
    const {
      match,
      loading,
      blogs,
      skilllevels,
      categories,
      opportunities,
      eligibilities,
      searchTerm,
      visibleResults,
      age,
      where
    } = this.props;

    return (
      <div>
        <Header match={match} pageTitle="Find an opportunity" />
        <div className="container-wide bg-white pad-30">
          <div className="pure-g justify-between">
            <div className="pure-u-1 pure-u-md-1-4">
              {/* if the loading of blogs is done, 
              then show  sidebar links */}
              {!loading && (
                <>
                  <h2>Filter</h2>
                  <Sidebar skilllevels={skilllevels} categories={categories} match={match} opportunities={opportunities}  match={match} eligibilities={eligibilities}  age={age} where={where} />
                </>
              )}
            </div>
            <div className="pure-u-1 pure-u-md-5-8" id="stories">
              {/* if loading state is true, then show a loading component */}
              {loading && <h2 className="title is-3">Loading...</h2>}
              {/* render blogs once ready */}
              {this.renderBlogs()}
              {/* if blog results in zero from user's searchTerm,
              let's make them aware of this  */}
              {blogs && this.renderBlogs().length < 1 && (
                <h3>{`There were no results found for '${searchTerm}'`}</h3>
              )}
              {/* if there are blogs and the visibleResults
              is less than the the amount of childpages 
              then we want to run our infinite scroll function to display more */}
              {blogs &&
                visibleResults < blogs.ChildPages.length &&
                this.infiniteScroll()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// return store data to const variable 'mapStateToProps'
const mapStateToProps = state => {
  return {
    ...state,
    loading: state.blogs.getLoading,
    blogs: state.blogs.getBlogs,
    skilllevels: state.blogs.getSkillLevels,
    categories: state.blogs.getCategories,
    opportunities: state.blogs.getOpportunities,
    eligibilities: state.blogs.getEligibilities,
    where: state.blogs.getWhere,
    date: state.blogs.getDate,
    searchTerm: state.blogs.getSearch,
    visibleResults: state.blogs.getVisibleResults
  };
};

// this is used to bind actions and dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    fetchLoading: () => {
      dispatch(fetchLoading());
    },
    fetchBlogs: () => {
      dispatch(fetchBlogs());
    },
    dispatch
  };
};

// connect a react component to our redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
