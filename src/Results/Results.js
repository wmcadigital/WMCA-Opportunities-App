import React, { Component } from 'react';
import x from '../fakeOpps.js';

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.handleChangeCourse = this.handleChangeCourse.bind(this);
  }

  componentDidMount() {
    const data = x;

    this.setState({ data });

    console.log(data);
  }

  handleChangeCourse = event => {
    this.setState({ Opportunity: event.target.value });
  };

  render() {
    this.state.data = info;

    const Opportunity = this.getUnique(info.data, 'Opportunity');
    const SkillLevel = this.getUnique(info.data, 'SkillLevel');
    const Category = this.getUnique(info.data, 'Category');

    const data = this.state.data;

    const filterDropdown = data.filter(function(result) {
      return result.Opportunity === data;
    });

    console.log('fil');
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
        <h1>Test</h1>

        {Category.map(data => (
          <div>
            <span className="wmca-form__radio">
              <label className="wmca-form__radio-label">{data.Category}</label>
              <input
                type="radio"
                name="radio"
                className="wmca-form__radio-checkmark"
                id={data.Category}
                value={data.Category}
              />
            </span>
          </div>
        ))}

        <br />
        <br />
        <br />
        <label>
          <p>Category / Radio</p>
          <select value={this.state.data} onChange={this.handleChangeCourse}>
            {Category.map(data => (
              <option key={data.Id} value={data.Category}>
                {data.Category}
              </option>
            ))}
          </select>
        </label>

        <div>
          <h1>Looped Data Here - Nothing showing?</h1>
          {filterDropdown.map(data => (
            <div key={data.Id} style={{ margin: '10px' }}>
              {data.Opportunity}
              <br />
            </div>
          ))}

          <h1>Data Here:</h1>
          {Opportunity.map(data => (
            <ul>
              <li key={data.Id}>
                <span className="highlight">Where it is:</span> {data.Where}
                <br />
                <span className="highlight">You need to live in:</span> {data.LiveIn}
                <br />
                <span className="highlight">You must be:</span> {data.Age}
                <br />
                <span className="highlight">{data.Opportunity}</span>
                <br />
                <span className="highlight">{data.Id}</span>
                <br />
                <h5>Desc:</h5>
                <p>{data.BlogContent}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
