import React, { Component } from "react";

class Opportunity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.radio_eachOpportunity = this.radio_eachOpportunity.bind(this);
        this.radio_allOpportunity = this.radio_allOpportunity.bind(this);
    }

    componentDidMount() {
        const data = require("../fakeOpps.json");
        this.setState({ data: data });

        console.log("Opps data Below:");
        console.log(data);
    }

    radio_allOpportunity = () => {
        return (
            <div key="All-Opportunities">
                <span className="wmca-form__radio">
                    <label htmlFor="All Opportunities" className="wmca-form__radio-label">
                        All Opportunities
          </label>

                    <input
                        type="radio"
                        name="All-Opportunities"
                        id="All-Opportunities"
                        value="All Opportunities"
                        defaultChecked
                    />

                    <input
                        type="radio"
                        name="All-Opportunities"
                        id="All-Opportunities"
                        value="All Opportunities"
                    />

                    <span className="wmca-form__radio-checkmark"> </span>
                </span>
            </div>
        );
    };

    radio_eachOpportunity = () => {
        const { opportunities } = this.state.data;
        const opportunitiesFlatted = opportunities && opportunities.flat();
        const opportunitiesNewSet = new Set(opportunitiesFlatted);
        const opportunitiesArray = [...opportunitiesNewSet];
        console.log("opportunitiesArray");
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

                            <input
                                type="radio"
                                name="radio"
                                id={opportunity}
                                value={opportunity}
                            />

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
                        {this.radio_allOpportunity()}
                        {this.radio_eachOpportunity()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Opportunity;
