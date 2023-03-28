import React, { Component, useState } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={e => this.setState({ text: e.target.value })} 
         value={this.state.text}
        />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
