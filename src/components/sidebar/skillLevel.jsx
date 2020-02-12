import React, { Component } from "react";
import Select from 'react-select'
import { Link } from "react-router-dom";

class SkillLevel extends Component {

	constructor(props) {
			super(props);
			this.state = {
				selectedSkill: ""
			};

			this.handleChange 			= this.handleChange.bind(this);
			this.redirectToSkillLevel 	= this.redirectToSkillLevel.bind(this);
			this.SkillLevelFunction 	= this.SkillLevelFunction.bind(this);
	}

	handleChange = async (event) => {
		 await this.setState({selectedSkill: event.target.value});
		 return await this.redirectToSkillLevel();
	}

	redirectToSkillLevel = () => {
		window.location = `${this.state.selectedSkill}`
	}

	SkillLevelFunction = () => {

		return (
			<>
			<div className="wmca-form wdgt">
          		<label for="dropdown" class="wmca-form-label">Skill level</label>
          		<select className="" onChange={this.handleChange}>
					<option value="">Select</option>
					<option value="advanced">Advanced</option>
					<option value="intermediate">Intermediate</option>
					<option value="beginner">Beginner</option>
				</select>
          	</div>
			</>
		)
	}

	render() {
		return (
		<div>
			{this.SkillLevelFunction()}
		</div>
		)
	}

}

export default SkillLevel;