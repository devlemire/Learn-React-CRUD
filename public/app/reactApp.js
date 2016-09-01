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
  },
  render() {
    return (
      <div>
        <h1>Create Person</h1>
        <input onChange={this.first_nameCatcher} type="text" />
        <input onChange={this.last_nameCatcher} type="text" />
        <button onClick={this.createPerson}>Create Person</button>
        <br></br>
        <br></br>
        <h1>Read People</h1>
        <button onClick={this.readPeople}>Read People</button>
        {this.state.people.map( (value, index) => {
          return (
            <p key={index}>{value.first_name} {value.last_name}</p>
          )
        })}
      </div>
    )
  },
  first_nameCatcher(event) {
    this.setState({
      first_name: event.target.value
    })
  },
  last_nameCatcher(event) {
    this.setState({
      last_name: event.target.value
    })
  },
  createPerson() {
    var person = {first_name: this.state.first_name, last_name: this.state.last_name}
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/add/person',
      data: person
    })
  },
  readPeople() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/api/people'
    }).then(r => {
      this.setState({
        people: r.data
      })
    });
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
