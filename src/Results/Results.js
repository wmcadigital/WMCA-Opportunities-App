import React, { Component } from "react";

export class Results extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.handleChangeCourse = this.handleChangeCourse.bind(this);
    }

    componentDidMount() {
        const data = require("../fakeOpps.json");
        this.setState({ data: data });

        console.log("data comp did mount below:");
        console.log(data);
    }

    handleChangeCourse = event => {
        this.setState({ Opportunity: event.target.value });
    };

    //Get the data for opportunies
    getUnique(arr, comp) {
        const unique = arr
            //store the comparison values in array
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    }

    render() {
        const Opportunity = this.getUnique(this.state.data, "Opportunity");
        const SkillLevel = this.getUnique(this.state.data, "SkillLevel");
        const Category = this.getUnique(this.state.data, "Category");
        const Age = this.getUnique(this.state.data, "Age");

        console.log(" opp below:");
        console.log(Opportunity);

        const data = this.state.data;

        const filterDropdown = data.filter(function (result) {
            return result.Opportunity === data;
        });

        console.log("fil");
        console.log(filterDropdown);

        return (
            <div>
                <label>
                    <p>Opportunity</p>
                    <select value={this.state.data} onChange={this.handleChangeCourse}>
                        {Opportunity.map(data => (
                            <option key={data.Id} value={data.Opportunity}>
                                {data.Opportunity}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <p>SkillLevel</p>
                    <select value={this.state.data} onChange={this.handleChangeCourse}>
                        {SkillLevel.map(data => (
                            <option key={data.Id} value={data.SkillLevel}>
                                {data.SkillLevel}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <p>Category / Industry</p>
                    <select value={this.state.data} onChange={this.handleChangeCourse}>
                        {Category.map(data => (
                            <option key={data.Id} value={data.Category}>
                                {data.Category}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <p>Age</p>
                    <select value={this.state.data} onChange={this.handleChangeCourse}>
                        {Age.map(data => (
                            <option key={data.Id} value={data.Age}>
                                {data.Age}
                            </option>
                        ))}
                    </select>
                </label>


                <label>
                    <p>Age</p>
                                



                    <select value={this.state.data} onChange={this.handleChangeCourse}>
                        {Age.map(data => (
                            <option key={data.Id} value={data.Age}>
                                {data.Age}
                            </option>
                        ))}
                    </select>
                </label>







                <div>
                    <h1>Looped Data Here</h1>
                    {filterDropdown.map(data => (
                        <div key={data.Id} style={{ margin: "10px" }}>
                            {data.Opportunity}
                            <br />
                        </div>
                    ))}

                    {Opportunity.map(data => (
                        <option key={data.Id} value={data.Opportunity}>
                            {data.Opportunity}
                            {data.Id}
                        </option>
                    ))}
                </div>
            </div>
        );
    }
}

export default Results;
