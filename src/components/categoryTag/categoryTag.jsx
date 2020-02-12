import React from "react";
import { Link } from "react-router-dom";

const CategoryTag = ({ blog }) => {
  const categories = blog.Category;

  return (
    categories &&
    categories.map(category => {
      // replace each instance of certain characters with utf-8 encoding
      const encodedUrl = encodeURIComponent(category)
        .toLowerCase()
        .replace(/'/g, escape);

      return (
        <Link
          to={`/opportunities/category/${encodedUrl}`}
          key={category}
          className="wmca-tag"
        >
          {category}
        </Link>
      );
    })
  );
};

export default CategoryTag;
