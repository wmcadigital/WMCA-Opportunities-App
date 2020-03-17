import React, { Component } from 'react';
import data from '../fakeOpps.json';

class Opportunity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    // this.radioEachOpportunity = this.radioEachOpportunity.bind(this);
    // this.radioAllOpportunity = this.radioAllOpportunity.bind(this);
  }

  componentDidMount() {
    this.setState({ data });

    // console.log('Opps data Below:');
    // console.log(data);
  }

  radioAllOpportunity = () => {
    return (
      <div key="All-Opportunities">
        <span className="wmca-form__radio">
          <label htmlFor="AllOpportunities" className="wmca-form__radio-label">
            All Opportunities
          </label>

          <input
            type="radio"
            name="All-Opportunities"
            id="AllOpportunities"
            value="All Opportunities"
            defaultChecked
          />

          <input
            type="radio"
            name="All-Opportunities"
            id="AllOpportunities"
            value="All Opportunities"
          />

          <span className="wmca-form__radio-checkmark"> </span>
        </span>
      </div>
    );
  };

  radioEachOpportunity = () => {
    const { opportunities } = this.state.data;
    const opportunitiesFlatted = opportunities && opportunities.flat();
    const opportunitiesNewSet = new Set(opportunitiesFlatted);
    const opportunitiesArray = [...opportunitiesNewSet];
    console.log('opportunitiesArray');
    console.log(opportunitiesFlatted);
    return (
      opportunities &&
      opportunitiesArray.map(opportunity => {
        return (
          <div key={opportunity}>
            <span className="wmca-form__radio">
              <label htmlFor={opportunity} className="wmca-form__radio-label">
                {opportunity}
              </label>

              <input
                type="radio"
                name="radio"
                id={opportunity}
                value={opportunity}
                defaultChecked
              />

              <input type="radio" name="radio" id={opportunity} value={opportunity} />

              <span className="wmca-form__radio-checkmark"> </span>
            </span>
          </div>
        );
      })
    );
  };

  render() {
    return (
      <div>
        <label htmlFor="radio" className="wmca-form-label">
          Opportunities
        </label>

        <div>
          <div className="wmca-form__radio" id="radio">
            {this.radioAllOpportunity()}
            {this.radioEachOpportunity()}
          </div>
        </div>
      </div>
    );
  }
}

export default Opportunity;
