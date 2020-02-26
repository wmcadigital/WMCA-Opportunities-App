import React, { Component } from "react";
//import { Link } from "react-router-dom";
import SkillLevel from "./skillLevel";
import Age from "./age";
import NewAge from './newAge'
import Postcode from "./postcode";
import Opportunity from "./opportunity";
import IndustryList from "./industry";
import Eligibility from "./eligibility";

class Sidebar extends Component {

  render() {
    return (
      <div className="wdgt-sidebar-nav wdgt">

        <div className="wmca-form wdgt">

          <SkillLevel match={this.props.match} skilllevels={this.props.skilllevels}/>

          <Age match={this.props.match} age={this.props.ages} />

          <NewAge match={this.props.match} age={this.props.age} />
 
          <Postcode match={this.props.match} where={this.props.where} />

          <Opportunity match={this.props.match} opportunities={this.props.opportunities}/>
          
          <IndustryList match={this.props.match} categories={this.props.categories}/>

          <Eligibility match={this.props.match} eligibilities={this.props.eligibilities}/>



        </div>
      </div>
    );
  }
}

export default Sidebar;
