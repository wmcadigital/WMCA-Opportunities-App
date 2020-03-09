import React, { Component } from 'react';

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    const todos = require('../newData.json');
    this.setState({ todos: todos });
    console.log(todos);
  }

  handleChangeCourse = event => {
    this.setState({ Opportunity: event.target.value });
  };

  render() {
    const { todos } = this.state;

    const listItems = todos.map(todo => (
      <div className="eachOpp" key={todo.Id}>
        <h2 className="name">{todo.Name}</h2>

        <p>
          <span className="where">Where it is: </span>
          {todo.Where}
        </p>

        <p>
          <span className="liveIn">You Need to live in: </span>
          {todo.LiveIn}
        </p>

        <p>
          <span className="age">You must be: </span>
          {todo.Age}
        </p>

        <p>
          <span className="date">It runs from: </span>
          {todo.DateFrom} - {todo.DateTo}
        </p>

        {todo.BlogContent}

        <hr />
      </div>
    ));

    return (
      <div>
        <h1>Some data: </h1>

        <h3>New Map</h3>
        <h5>DotMap01</h5>
        {listItems}
        <hr />
      </div>
    );
  }
}

export default Results;
