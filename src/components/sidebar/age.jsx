import React, { Component } from "react";

class Age extends Component {
  constructor(props) {
    super(props);

    this.handleAgeCheck = this.handleAgeCheck.bind(this);

    this.state = {
      ageCheck: ''
    }
  }


  handleAgeCheck(event) {
    this.setState({
      input: event.target.value
    })
    //Console log the age
    console.log(event.target.value);
  }



  
  render() {
    return (
      <div className="wmca-form wdgt">
        <label htmlFor="r testadio" className="wmca-form-label">
          Age - e.g. 25
            <input className="pure-u-1-1" type="text" name="searchStories" value={this.state.input} onChange={this.handleAgeCheck.bind(this)} />
        </label>
      </div>
    )
  }
}

export default Age;