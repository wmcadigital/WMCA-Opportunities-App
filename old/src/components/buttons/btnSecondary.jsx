import React from "react";
import { Link } from "react-router-dom";

const BtnSecondary = props => {
  const { linkText, linkTo } = props;
  return (
    <Link className="btn-secondary" to={linkTo}>
      {linkText}
    </Link>
  );
};

export default BtnSecondary;
