import React, { Component } from "react";
import { Link } from "react-router-dom";

class Opportunity extends Component {

  constructor(props) {
    super(props);

    this.radio_eachOpportunity = this.radio_eachOpportunity.bind(this);
    this.radio_allOpportunity = this.radio_allOpportunity.bind(this);
  }

radio_allOpportunity = () => {

  const { match } = this.props;

	return (
			<div key="All-Opportunities">
		        <Link to="/opportunities/">
		          <span className="wmca-form__radio">
		            <label htmlFor="All Opportunities" className="wmca-form__radio-label">
		              All Opportunities
		            </label>
		            {match.url === "/opportunities/" && (
		              <input
		                type="radio"
		                name="All-Opportunities"
		                id="All-Opportunities"
		                value="All Opportunities"
		                defaultChecked
		              />
		            )}
		            {match.url !== "/opportunities/" && (
		              <input
		                type="radio"
		                name="All-Opportunities"
		                id="All-Opportunities"
		                value="All Opportunities"
		              />
		            )}
		            <span className="wmca-form__radio-checkmark"> </span>
		          </span>
		        </Link>
		    </div>
		)
}


  radio_eachOpportunity = () => {

    const { opportunities, match } = this.props;
    const opportunitiesFlatted = opportunities && opportunities.flat();
    const opportunitiesNewSet = new Set(opportunitiesFlatted);
    const opportunitiesArray = [...opportunitiesNewSet];



console.log('This the data: ')
console.log(opportunitiesNewSet);


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
                    // checked={this.state.selectedOpportunity === 'option1'}
                    defaultChecked
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
			<div>
			<label htmlFor="radio" className="wmca-form-label">
			Opportunities
			</label>

			<div>
				<div className="wmca-form__radio" id="radio">
          {this.radio_allOpportunity()}
				  {this.radio_eachOpportunity()}
				</div>
			</div>
			</div>
		)
  } 

}

export default Opportunity;