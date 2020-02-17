import React, { Component } from 'react'

class Postcode extends Component {
  state = {
    term: ''
  }
  

  // handlePostCodeCheck(event){
  //   this.setState({
  //     input: event.target.value
  //   })
  //   console.log(event.target.value)
  // }

  render() {
    return (
      <div className="wmca-form wdgt">
        <label htmlFor="radio" className="wmca-form-label">
          Postcode - e.g. DY7 4PU
            <input
            className="pure-u-1-1"
            type="text"
            name="searchStories"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
            />
            </label>
      </div>
    )
  }
}

export default Postcode;