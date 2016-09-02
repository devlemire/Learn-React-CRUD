import React from 'react';
import Axios from 'axios';

export default class updatePerson extends React.Component {
  constructor(props){
    super(props);
    this.state = { first_name: this.props.person.first_name, last_name: this.props.person.last_name };
  }

  render() {
    return(
      <div>
        <p>Update Person - {this.props.person.first_name} {this.props.person.last_name}</p>
        <input onChange={this.first_nameCatcher.bind(this)} value={this.state.first_name} />
        <input onChange={this.last_nameCatcher.bind(this)} value={this.state.last_name} />
        <button onClick={this.updatePerson.bind(this)}>Update Person</button>
      </div>
    )
  }

  first_nameCatcher(e) {
    this.setState({ first_name: e.target.value })
  }

  last_nameCatcher(e) {
    this.setState({ last_name: e.target.value });
  }
  updatePerson() {
    Axios.put(this.props.api + 'api/person/' + this.props.person.id, {first_name: this.state.first_name, last_name: this.state.last_name}).then( r => {
      this.props.update(r.data);
      this.props.reset();
    })
  }
}
