import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Read_people from './component/readPeople';
import Create_person from './component/createPerson';
var API_URL = 'http://localhost:3000/'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { people: [], create_first: '', create_last: '' }
  }

  componentWillMount() {
    //Fires once when the component is first mounted
    Axios.get(API_URL + `api/people`).then( r => {
      this.setState({
        people: r.data
      })
    })
  }

  shouldComponentUpdate(nextProps) {
    //Fires everytime with render()
    Axios.get(API_URL + 'api/people').then( r => {
      if(r.data.length !== this.state.people.length) {
        this.setState({ people: r.data });
      } else {
        for(var i in r.data) {
          if(r.data[i].first_name !== this.state.people[i].first_name) {
            this.setState({ people: r.data });
          }
          if(r.data[i].last_name !== this.state.people[i].last_name) {
            this.setState({ people: r.data })
          }
        }
      }
    })
    return true;
  }

  render() {
    return(
      <div>
        <Read_people api={API_URL} update={this.updatePeople.bind(this)} people={this.state.people} />
        <Create_person api={API_URL} update={this.updatePeople.bind(this)} />
      </div>
    )
  }

  updatePeople(r) {
    this.setState({ people: r });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
