import React, { Component } from "react";
import { Link } from "react-router-dom";

class IndustryList extends Component {

	constructor(props) {
		super(props);	

		this.radio_allIndustries = this.radio_allIndustries.bind(this);
		this.radio_eachIndustry = this.radio_eachIndustry.bind(this);
	}

	//All Industry Opportunities
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

	//Each Industry Opportunities Buttons
	radio_eachIndustry = () => {

	    const { categories, match } = this.props;
	    const categoriesFlatted = categories && categories.flat();
	    const categoriesNewSet = new Set(categoriesFlatted);
		const categoriesArray = [...categoriesNewSet];
		
		console.log("categories:")
		console.log(categories)

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


	//Render the buttons in the sidebar
	render() {
		return (
			<div>
			<label htmlFor="radio" className="wmca-form-label">
			Industry
			</label>

			<div>
				<div className="wmca-form__radio" id="radio">
					{this.radio_allIndustries()}
					{this.radio_eachIndustry()}
				</div>
			</div>
			</div>
		)
	}
}

export default IndustryList;