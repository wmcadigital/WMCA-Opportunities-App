import React from 'react';

const SingleResult = (props) => {
  const { Name, Where, LiveIn, Age, DateFrom, DateTo, Summary } = props;
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <h3>{ Name }</h3>
        <h4 className="color-blue">Where it is: <span className="color-black">{ Where }</span></h4>
        <h4 className="color-blue">You need to live in: <span className="color-black">{ LiveIn }</span></h4>
        <h4 className="color-blue">You must be: <span className="color-black">{ Age }</span></h4>
        <h4 className="color-blue">It runs from: <span className="color-black">{ DateFrom } - {DateTo}</span></h4>
        <div>
          { Summary }
        </div>
      </div>
      
    </div>
  )
}

export default SingleResult;






// Id: 2109
// Name: "Functional Skills Maths Entry Level 1 to Level 2"
// Url: "/what-we-do/productivity-and-skills/opportunities/functional-skills-maths-entry-level-1-to-level-2/"
// Summary: "Various start and end dates. Contact learner.services@dudleycol.ac.uk"
// PubDate: "2020-02-27T15:54:09.447Z"
// Opportunity: ["Adult Education Courses"]
// Category: ["Other"]
// Eligibility: (3) ["Part Time", "Unemployed", "Employed"]
// SkillLevel: "Level 2"
// Where: "The Broadway, Dudley College Of Technology, Dudley"
// LiveIn: "West Midlands"
// Age: "Over 18"
// DateFrom: "0001-01-01T00:00:00"
// DateTo: "0001-01-01T00:00:00"
// Link: "https://www.dudleycol.ac.uk/Courses"