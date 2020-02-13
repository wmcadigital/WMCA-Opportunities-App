import React, { Component } from 'react'

class Postcode extends Component {
    constructor(props) {
      super(props)
      this.selectedLevel = "";
    
    }

    render() {
      return (
        <div className="wmca-form wdgt">
          <label htmlFor="radio" className="wmca-form-label">
            Postcode - e.g. DY7 4PU
            <input className="pure-u-1-1" type="search" name="searchStories">
            </input>
          </label>
        </div>
      )
    }
  }

export default Postcode;