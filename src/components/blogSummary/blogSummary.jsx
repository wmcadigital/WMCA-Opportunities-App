import React from "react";
// import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

// import components
import BtnSecondary from "../buttons/btnSecondary";
//import CategoryTag from "../categoryTag/categoryTag";

const BlogSummary = ({ blog }) => {
  const { sanitize } = DOMPurify;
  // get published date parse the string and set variables for day,
  // month and year to customise date layout
  const parsedDate = Date.parse(blog.PubDate);
  const pubDateday = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit"
  }).format(parsedDate);
  const pubDateMonth = new Intl.DateTimeFormat("en-GB", {
    month: "long"
  }).format(parsedDate);
  const pubDateYear = new Intl.DateTimeFormat("en-GB", {
    year: "numeric"
  }).format(parsedDate);

  const fromDate = Date.parse(blog.DateFrom);
  const fromDateday = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit"
  }).format(fromDate);
  const fromDateMonth = new Intl.DateTimeFormat("en-GB", {
    month: "long"
  }).format(fromDate);
  const fromDateYear = new Intl.DateTimeFormat("en-GB", {
    year: "numeric"
  }).format(fromDate);

  const toDate = Date.parse(blog.DateTo);
  const toDateday = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit"
  }).format(toDate);
  const toDateMonth = new Intl.DateTimeFormat("en-GB", {
    month: "long"
  }).format(toDate);
  const toDateYear = new Intl.DateTimeFormat("en-GB", {
    year: "numeric"
  }).format(toDate);

  // store blog copy in const variable
  const content = blog.BlogContent;
  // trim the content to first closing paragraph
  // this is used for the overview on the blog index/archive
  let trimmedContent = content.substr(0);
  trimmedContent = trimmedContent.substr(
    0,
    Math.min(trimmedContent.length, trimmedContent.indexOf("</p>"))
  );

  return (
    <>
      <article className="wdgt">
        <h2>{blog.Name}</h2>
        {/* 
        <p className="text-color-primary">
          {`${pubDateMonth} ${pubDateday}, ${pubDateYear}`}
        </p>
        <div className="wdgt">
          <CategoryTag blog={blog} />
        </div>
        */}
        <ul>
          <li><span className="highlight">Where it is:</span> {blog.Where}</li>
          <li><span className="highlight">You need to live in:</span> {blog.LiveIn}</li>
          <li><span className="highlight">You must be:</span> {blog.Age}</li>
          <li><span className="highlight">It runs from:</span> {`${fromDateMonth} ${fromDateday}, ${fromDateYear}`} - {`${toDateMonth} ${toDateday}, ${toDateYear}`}</li>
        </ul>
        {/* 
        {blog.BlogImageBig && (
          <Link to={blog.Url}>
            <img src={blog.BlogImageBig} alt={blog.Name} className="pure-img pure-u-1" />
          </Link>
        )}
        */}
        <p>{blog.BlogContent}</p>
        <div dangerouslySetInnerHTML={{ __html: sanitize(trimmedContent) }} />
        <div className="text-right">
          <BtnSecondary linkText="Find out more" linkTo={blog.Url} />
        </div>
      </article>
      <hr />
    </>
  );
};

export default BlogSummary;
