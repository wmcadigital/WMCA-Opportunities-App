import React, { Component } from "react";
import { connect } from "react-redux";

// import actions
import { fetchBlogs } from "../../../actions/index";

// import componets
import Sidebar from "../../sidebar/sidebar";
import BlogItem from "../../blogItem/blogItem";

class BlogArticle extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    // destructure props
    const { fetchBlogs } = this.props;

    // display results as soon as we've fetched api is resolved
    fetchBlogs();
  }

  renderArticle() {
    // destructure props
    const { blogs } = this.props;

    // return the current page blog and pass as props to component
    return (
      blogs && (
        <BlogItem article={blogs.CurrentPage} key={blogs.CurrentPage.Id} />
      )
    );
  }

  render() {
    // destructure props
    const { match, categories, opportunities, skilllevels, eligibilities, where } = this.props;

    return (
      <>
        <div className="container-wide bg-white pad-30">
          <div className="pure-g justify-between">
            <div className="pure-u-1 pure-u-md-1-4">
              <Sidebar 
                categories={categories} 
                opportunities={opportunities} 
                skilllevels={skilllevels}  
                eligibilities={eligibilities} 
                where={where}
                match={match} 
              />
            </div>
            <div className="pure-u-1 pure-u-md-5-8">{this.renderArticle()}</div>
          </div>
        </div>
      </>
    );
  }
}

// return store data to const variable 'mapStateToProps'
const mapStateToProps = state => {
  return {
    ...state,
    blogs: state.blogs.getBlogs,
    categories: state.blogs.getCategories,
    opportunities: state.blogs.getOpportunities,
    eligibilities: state.blogs.getEligibilities,
    where: state.blogs.getWhere,
    skilllevels: state.blogs.getSkillLevels,
    date: state.blogs.getDate,
    searchTerm: state.blogs.getSearch
  };
};

// this is used to bind actions and dispatch actions
const mapDispatchToProps = dispatch => {
  return {
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
)(BlogArticle);
