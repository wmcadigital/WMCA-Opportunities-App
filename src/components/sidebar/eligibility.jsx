import React, { Component } from 'react'
import { Link } from "react-router-dom";

class eligibility extends Component {

  constructor(props) {
    super(props);

    this.radio_allEligibility = this.radio_allEligibility.bind(this);
    this.radio_eachEligibility = this.radio_eachEligibility.bind(this); 
  }


  //All Eligibility Opportunities
  radio_allEligibility = () => {

    const { match } = this.props;

    return (
      <div key="All-Eligibility">
        <Link to="/opportunities/">
          <span className="wmca-form__radio">
            <label htmlFor="All Eligibility" className="wmca-form__radio-label">
              All Eligibility
		            </label>
            {match.url === "/opportunities/" && (
              <input
                type="radio"
                name="All-Eligibility"
                id="All-Eligibility"
                value="All Eligibility"
                defaultChecked
              />
            )}
            {match.url !== "/opportunities/" && (
              <input
                type="radio"
                name="All-Eligibility"
                id="All-Eligibility"
                value="All Eligibility"
              />
            )}
            <span className="wmca-form__radio-checkmark"> </span>
          </span>
        </Link>
      </div>
    )
  }

  //Each Eligibility Opportunies Buttons
  radio_eachEligibility = () => {

    const { eligibilities, match } = this.props;
    const eligibilitiesFlatted = eligibilities && eligibilities.flat();
    const eligibilitiesNewSet = new Set(eligibilitiesFlatted);
    const eligibilitiesArray = [...eligibilitiesNewSet];

    /*
      You will see below that the data is coming
      through the console.log just fine but that posecode.jsx is having issues

      Can you see if I have made an error somewhere?
      

    */

    console.log('eligibilities')
    console.log(eligibilities)
    console.log('eligibilitiesNewSet');
    console.log(eligibilitiesNewSet);

    return (
      eligibilities &&
      eligibilitiesArray.map(eligibility => {
        const encodedUrl = encodeURIComponent(eligibility)
          .toLowerCase()
          .replace(/'/g, escape);
        const decodedUrl = decodeURIComponent(encodedUrl);
        return (
          <div key={eligibility}>
            <Link to={`/opportunities/eligibilities/${encodedUrl}`}>
              <span className="wmca-form__radio">
                <label htmlFor={eligibility} className="wmca-form__radio-label">
                  {eligibility}
                </label>
                {match.params.eligibility === decodedUrl && (
                  <input
                    type="radio"
                    name="radio"
                    id={eligibility}
                    value={eligibility}
                    defaultChecked
                  />
                )}
                {match.params.eligibility !== decodedUrl && (
                  <input
                    type="radio"
                    name="radio"
                    id={eligibility}
                    value={eligibility}
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
        <label htmlFor="radio" className="wmca-form-label">
          Are you currently employed?
        </label>

        <div className="wmca-form__radio" id="radio">
          {this.radio_allEligibility()}
          {this.radio_eachEligibility()}
        </div>
      </div>
    )
  }
}

export default eligibility
