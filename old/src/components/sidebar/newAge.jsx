import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NewAge extends Component {

    constructor(props) {
        super(props);

        this.radio_allEligibility = this.radio_allEligibility.bind(this);
        this.radio_eachEligibility = this.radio_eachEligibility.bind(this);
    }


    //All Eligibility Opportunities
    radio_allEligibility = () => {

        const { match } = this.props;

        return (
            <div key="All-Age">
                <Link to="/opportunities/">
                    <span className="wmca-form__radio">
                        <label htmlFor="All Age" className="wmca-form__radio-label">
                            All Age
		            </label>
                        {match.url === "/opportunities/" && (
                            <input
                                type="radio"
                                name="All-Age"
                                id="All-Age"
                                value="All Age"
                                defaultChecked
                            />
                        )}
                        {match.url !== "/opportunities/" && (
                            <input
                                type="radio"
                                name="All-Age"
                                id="All-Age"
                                value="All Age"
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

        const { age, match } = this.props;
        const agesFlatted = age && age.flat();
        const agesNewSet = new Set(agesFlatted);
        const agesArray = [...agesNewSet];

        return (
            age &&
            agesArray.map(eligibility => {
                const encodedUrl = encodeURIComponent(age)
                    .toLowerCase()
                    .replace(/'/g, escape);
                const decodedUrl = decodeURIComponent(encodedUrl);
                return (
                    <div key={age}>
                        <Link to={`/opportunities/eligibilities/${encodedUrl}`}>
                            <span className="wmca-form__radio">
                                <label htmlFor={age} className="wmca-form__radio-label">
                                    {age}
                                </label>
                                {match.params.age === decodedUrl && (
                                    <input
                                        type="radio"
                                        name="radio"
                                        id={age}
                                        value={age}
                                        defaultChecked
                                    />
                                )}
                                {match.params.age !== decodedUrl && (
                                    <input
                                        type="radio"
                                        name="radio"
                                        id={age}
                                        value={age}
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
                    age
        </label>

                <div className="wmca-form__radio" id="radio">
                    {this.radio_allEligibility()}
                    {this.radio_eachEligibility()}
                </div>
            </div>
        )
    }
}

export default NewAge
