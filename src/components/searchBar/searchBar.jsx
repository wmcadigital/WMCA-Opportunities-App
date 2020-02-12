import React from "react";

const SearchBar = ({ searchTerm, onFormSubmit, onChangeInput }) => {
  return (
    <form onSubmit={onFormSubmit} className="wmca-form wdgt">
      <div className="wmca-form__search">
        <input
          className="pure-u-1-1"
          type="search"
          name="searchStories"
          placeholder="Search opportunities"
          value={searchTerm}
          onChange={onChangeInput}
        />
        <button type="button">
          <span className="fas fa-search" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
