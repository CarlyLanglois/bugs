import React, { Component } from 'react';
import Bug from './bug';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Bugs</h1>
          <div>Click on a bug to see more</div>
        </header>
        <Bug bug={'Lactobacillus'}/>
        <Bug bug={'Firmicutes'}/>
        <Bug bug={'Bacteroidetes'}/>
      </div>
    );
  }
}

export default App;
