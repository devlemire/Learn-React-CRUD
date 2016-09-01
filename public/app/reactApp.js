import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

var App = React.createClass({
  getInitialState() {
    return {
      first_name: '',
      last_name: '',
      people: []
    }
  }
  render() {
    return (
      <div>
        <h1>Add Person</h1>
        <input onChange={this.first_nameCatcher} type="text" />
        <input onChange={this.last_nameCatcher} type="text" />
        <button onClick={this.addPerson}>Add Person</button>
      </div>
    )
  },
  first_nameCatcher(event) {
    this.setState() {
      first_name: event.target.value
    }
  },
  last_nameCatcher(event) {
    this.setState() {
      last_name: event.target.value
    }
  },
  addPerson() {
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/add/person'
    })
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
