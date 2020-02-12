import React, { Component } from "react";
import { Link } from "react-router-dom";

class IndustryList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};

		this.radio_allIndustries 	= this.radio_allIndustries.bind(this);
		this.radio_eachIndustry 	= this.radio_eachIndustry.bind(this);
	}

	radio_allIndustries = () => {

		const { match } = this.props;

		return (
			<div key="All-Industries">
		        <Link to="/opportunities/">
		          <span className="wmca-form__radio">
		            <label htmlFor="All Industries" className="wmca-form__radio-label">
		              All Industries
		            </label>
		            {match.url === "/opportunities/" && (
		              <input
		                type="radio"
		                name="All-Industries"
		                id="All-Industries"
		                value="All Industries"
		                defaultChecked
		              />
		            )}
		            {match.url !== "/opportunities/" && (
		              <input
		                type="radio"
		                name="All-Industries"
		                id="All-Industries"
		                value="All Industries"
		              />
		            )}
		            <span className="wmca-form__radio-checkmark"> </span>
		          </span>
		        </Link>
		    </div>
		)
	}

	radio_eachIndustry = () => {

	    const { categories, match } = this.props;
	    const categoriesFlatted = categories && categories.flat();
	    const categoriesNewSet = new Set(categoriesFlatted);
	    const categoriesArray = [...categoriesNewSet];

	    return (
	      categories &&
	      categoriesArray.map(category => {
	        const encodedUrl = encodeURIComponent(category)
	          .toLowerCase()
	          .replace(/'/g, escape);
	        const decodedUrl = decodeURIComponent(encodedUrl);

	        return (
	          <div key={category}>
	            <Link to={`/opportunities/category/${encodedUrl}`}>
	              <span className="wmca-form__radio">
	                <label htmlFor={category} className="wmca-form__radio-label">
	                  {category}
	                </label>
	                {match.params.category === decodedUrl && (
	                  <input
	                    type="radio"
	                    name="radio"
	                    id={category}
	                    value={category}
	                    defaultChecked
	                  />
	                )}
	                {match.params.category !== decodedUrl && (
	                  <input type="radio" name="radio" id={category} value={category} />
	                )}
	                <span className="wmca-form__radio-checkmark"> </span>
	              </span>
	            </Link>
	          </div>
	        );
	      })
	    );
	}

	render() {
		return (
			<>
			<label htmlFor="radio" className="wmca-form-label">
			Industry
			</label>

			<div>
				<div className="wmca-form__radio" id="radio">
					{this.radio_allIndustries()}
					{this.radio_eachIndustry()}
				</div>
			</div>
			</>
		)
	}
}

export default IndustryList;