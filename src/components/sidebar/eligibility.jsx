import React, { Component } from "react";
import { Link } from "react-router-dom";

class Eligibility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            match: this.props.match
        };

        this.radio_eachEligibility = this.radio_eachEligibility.bind(this);
    }

    radio_eachEligibility = () => {

        const { eligibilities, match } = this.props;
        const eligibilitiesFlatted = eligibilities && eligibilities.flat();
        const eligibilitiesNewSet = new Set(eligibilitiesFlatted);
        const eligibilitiesArray = [...eligibilitiesNewSet];

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
                        checked={this.state.selectedEligibility === 'option1'}
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
            <>
            <label htmlFor="radio" className="wmca-form-label">
                Are you currently employed?
            </label>
            {this.radio_eachEligibility()}
            </>
        );
    }

}

export default Eligibility;