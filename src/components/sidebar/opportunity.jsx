import React, { Component } from "react";
import { Link } from "react-router-dom";

class Opportunity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match
    };

    this.radio_eachOpportunity = this.radio_eachOpportunity.bind(this)
  }

  radio_eachOpportunity = () => {

    const { opportunities, match } = this.props;
    const opportunitiesFlatted = opportunities && opportunities.flat();
    const opportunitiesNewSet = new Set(opportunitiesFlatted);
    const opportunitiesArray = [...opportunitiesNewSet];

    return (
      opportunities &&
      opportunitiesArray.map(opportunity => {
        const encodedUrl = encodeURIComponent(opportunity)
          .toLowerCase()
          .replace(/'/g, escape);
        const decodedUrl = decodeURIComponent(encodedUrl);
        return (
          <div key={opportunity}>
            <Link to={`/opportunities/${encodedUrl}`}>
              <span className="wmca-form__radio">
                <label htmlFor={opportunity} className="wmca-form__radio-label">
                  {opportunity}
                </label>
                {match.params.opportunity === decodedUrl && (
                  <input
                    type="radio"
                    name="radio"
                    id={opportunity}
                    value={opportunity}
                    checked={this.state.selectedOpportunity === 'option1'}
                  />
                )}
                {match.params.opportunity !== decodedUrl && (
                  <input
                    type="radio"
                    name="radio"
                    id={opportunity}
                    value={opportunity}
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
          Opportunities
            </label>

        <div>
          <div className="wmca-form__radio" id="radio">
            <div key="Opportunities">
              <Link to="/opportunities/">
                <span className="wmca-form__radio">
                  <label htmlFor="Opportunities" className="wmca-form__radio-label">
                    All Opportunities
                        </label>
                  {this.state.match.path === `/opportunities/` && (
                    <input
                      type="radio"
                      name="radio"
                      id="Opportunities"
                      value="Opportunities"
                      defaultChecked
                    />
                  )}
                  {this.props.match.url !== `/opportunities/` && (
                    <input
                      type="radio"
                      name="radio"
                      id="Opportunities"
                      value="Opportunities"
                    />
                  )}
                  <span className="wmca-form__radio-checkmark"> </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {this.radio_eachOpportunity()}
      </>
    );
  }

}

export default Opportunity;