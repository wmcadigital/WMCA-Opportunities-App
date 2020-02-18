import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Postcode extends Component {

  constructor(props) {
    super(props);
    this.search_allPostCode = this.search_eachwhere.bind(this);
    this.search_eachwhere = this.search_eachwhere.bind(this);
  }

  
  search_allPostCode = () => {
    const { match } = this.props;

    return (
      <div key="All-Opportunities">
        <Link to="/opportunities/">        
        {match.url === "/opportunities/" && (
          <label htmlFor="where" className="wmca-form-label">
            Postcode - e.g. DY7 4PU- Top
            <input
              className="pure-u-1-1"
              type="text"
              name="searchStories"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
            />
          </label>
          )}           
        </Link>
      </div>
    )
  }

  //Each Industry Opportunities Buttons
  search_eachwhere = () => {

    const { where, match } = this.props;
    const whereFlatted = where && where.flat();
    const whereNewSet = new Set(whereFlatted);
    const whereArray = [...whereNewSet];
    console.log('Props:')
    console.log(where.whereArray);
    console.log('Where:')
    console.log(whereNewSet);

    return (
      where &&
      whereArray.map(postcode => {
        const encodedUrl = encodeURIComponent(postcode)
          .toLowerCase()
          .replace(/'/g, escape);
        const decodedUrl = decodeURIComponent(encodedUrl);

        return (
          <div key={postcode}>
            <Link to={`/opportunities/postcode/${encodedUrl}`}>
              <span>
                <label htmlFor={postcode} className="wmca-form__radio-label">
                  {postcode}
                </label>
                {match.params.postcode === decodedUrl && (
                  <input
                    type="text"
                    name="searchStories"
                    id={postcode}
                    value={postcode}
                    defaultChecked
                  />
                )}
                {match.params.postcode !== decodedUrl && (
                  <input type="text" name="searchStories" id={postcode} value={postcode} />
                )}
                <span className="wmca-form__radio-checkmark"> </span>
              </span>
            </Link>
          </div>
        );
      })
    );
  }











  
	//Render the postcode search in the sidebar
  render() {
    return (
      <div className="wmca-form wdgt">
      

        <h5>Try me </h5>
        {this.search_allPostCode()}
        {this.search_eachwhere()}
      </div>
    )
  }
}

export default Postcode;