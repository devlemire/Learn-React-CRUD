import React from 'react';
import Axios from 'axios';
import Update_person from './updatePerson';

export default class readPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false, person: null }
  }

  render() {
    return (
      <div>
        <h1>People - Click to delete</h1>
        {this.props.people.map( (value, index) => {
          return (
            <div>
              <p className="same-line" key={value.id}>{value.first_name} {value.last_name}</p>
              <button onClick={this.toggleEdit.bind(this, value)} className="same-line" key={'btn_' + value.id}>Edit</button>
              <button onClick={this.deletePerson.bind(this, value.id)} className="same-line" key={'delete_btn_' + value.id}>Delete</button>
            </div>
          )
        })}
        {this.state.showEdit
          ? <Update_person person={this.state.person} api={this.props.api} update={this.props.update} reset={this.reset.bind(this)} />
          : null
        }
      </div>
    )
  }

  toggleEdit(person) {
    console.log(person);
    if( !(this.state.person) ) {
      this.setState({ showEdit: true, person: person });
    } else {
      if(person.id === this.state.person.id) {
        this.setState({ showEdit: !this.state.showEdit, person: person });
      } else {
        this.setState({ showEdit: true, person: person });
      }
    }
  }

  reset() {
    this.setState({ showEdit: false, person: null });
  }

  deletePerson(id) {
    Axios.delete(this.props.api + 'api/person/' + id).then( r => {
      this.props.update(r.data);
    })
  }
}
