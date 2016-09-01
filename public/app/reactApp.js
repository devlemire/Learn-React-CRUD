import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

var App = React.createClass({
  getInitialState() {
    return {
      people: []
    }
  }
  render() {
    return (
      <div>
        <input type="text" />
        <input type="text" />
        <button>Add Person</button>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
