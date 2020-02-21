import React, { Component } from 'react'
import { Link } from "react-router-dom";

class postcode extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderSearchData = this.renderSearchData.bind(this);
  }


  handleChange = e => {
    this.setState({ searchField: e.target.value })
    console.log(e.target.value)
  }


  renderSearchData = () => {
    const { where, match } = this.props;
    const whereFlatted = where && where.flat();
    const whereNewSet = new Set(whereFlatted);
    const whereArray = [...whereNewSet];


    console.log(whereNewSet);

    return (
      where &&
      whereArray.map(where => {
        const encodedUrl = encodeURIComponent(where)
          .toLowerCase()
          .replace(/'/g, escape);
        const decodedUrl = decodeURIComponent(encodedUrl);
        return (
          <div key={where}>

          
          <Link to={`/opportunities/where/${encodedUrl}`}>
          <input
          className="pure-u-1-1"
          type="text"
          name="searchStories"
          onChange={this.handleChange}
          />
          </Link>
          
          {match.params.where === decodedUrl && (

            <div>
            <h1>dedede</h1>
            </div>
            )}
          </div>
        )
      })
    );
  }



  render() {
    return (
      <div>
        <label htmlFor="where" className="wmca-form-label">
          Postcode - e.g. DY7 4PU
          </label> 
        {this.renderSearchData()}
      </div>
    )
  }
}

export default postcode
