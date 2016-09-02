import React from 'react';
import Axios from 'axios';

export default class createPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first_name: '', last_name: '' }
  }

  render() {
    return (
      <div>
        <h1>Create Person</h1>
        <input placeholder='First Name' onChange={this.first_nameCatcher.bind(this)} />
        <input placeholder='Last Name' onChange={this.last_nameCatcher.bind(this)} />
        <button onClick={this.createPerson.bind(this)}>Create Person</button>
      </div>
    )
  }

  first_nameCatcher(e) {
    this.setState({ first_name: e.target.value });
  }

  last_nameCatcher(e) {
    this.setState({ last_name: e.target.value });
  }

  createPerson() {
    Axios.post(this.props.api + 'api/people', { first_name: this.state.first_name, last_name: this.state.last_name }).then( r => {
      this.props.update(r.data);
    })
  }
}
