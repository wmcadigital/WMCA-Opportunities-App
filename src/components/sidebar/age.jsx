import React, { Component } from "react";

class Age extends React.Component {
    constructor(props) {
      super(props)
      this.selectedLevel = "";
    
    }

    render() {
      return (
        <div className="wmca-form wdgt">
          <label htmlFor="radio" className="wmca-form-label">
            Age - e.g. 25
            <input class="pure-u-1-1" type="search" name="searchStories">
            </input>
          </label>
        </div>
      )
    }
  }

export default Age;