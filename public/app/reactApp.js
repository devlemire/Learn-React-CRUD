import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

var App = React.createClass({
  getInitialState() {
    return {
      first_name: '',
      last_name: '',
      people: [],
      edit_id: '',
      edit_first: '',
      edit_last: '',
      delete_id: ''
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
        <br></br>
        <br></br>
        <h1>Update Person</h1>
        <input onChange={this.edit_idCatcher} type="text" />
        <input onChange={this.edit_firstCatcher} type="text" />
        <input onChange={this.edit_lastCatcher} type="text" />
        <button onClick={this.updatePerson}>Update Person</button>
        <br></br>
        <br></br>
        <h1>Delete Person</h1>
        <input onChange={this.delete_idCatcher} type="text" />
        <button onClick={this.deletePerson}>Delete Person</button>
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
  },
  edit_idCatcher(event) {
    this.setState({
      edit_id: event.target.value
    })
  },
  edit_firstCatcher(event) {
    this.setState({
      edit_first: event.target.value
    })
  },
  edit_lastCatcher(event) {
    this.setState({
      edit_last: event.target.value
    })
  },
  updatePerson() {
    var person = {
      id: this.state.edit_id,
      first_name: this.state.edit_first,
      last_name: this.state.edit_last
    }

    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/update/person',
      data: person
    })
  },
  delete_idCatcher(event) {
    this.setState({
      delete_id: event.target.value
    })
  },
  deletePerson() {
    console.log('delete call', `http://localhost:3000/api/person/${this.state.delete_id}`);
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/api/person/${this.state.delete_id}`
    })
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
