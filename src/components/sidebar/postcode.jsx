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

    /*
    Hi Dayle this is where I want the data to show. 
    If you have a look at the eligibility.jsx file  

    */

    console.log('Just trying where now:')
    console.log(where)

    console.log('where postcode data should be:');
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
              <span className="wmca-form__radio">
                <label htmlFor={where} className="wmca-form__radio-label">
                  {where}
                </label>
                {match.params.where === decodedUrl && (
                  <input
                    type="radio"
                    name="radio"
                    id={where}
                    value={where}
                    defaultChecked
                  />
                )}
                {match.params.where !== decodedUrl && (
                  <input
                    type="radio"
                    name="radio"
                    id={where}
                    value={where}
                  />
                )}
                <span className="wmca-form__radio-checkmark"> </span>
              </span>
            </Link>
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
            <input
            className="pure-u-1-1"
            type="text"
            name="searchStories"
            onChange={this.handleChange}
          />
        </label>


        <br />

        {this.renderSearchData()}
      </div>
    )
  }
}

export default postcode
