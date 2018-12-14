import React, { Component } from 'react';
import Bug from './bug';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Bugs</h1>
          <div>Click on a bug to see more</div>
        </header>
        <div className="bugs-container">
          <div className='row'>
            <Bug bug={'Lactobacillus'}/>
            <Bug bug={'Firmicutes'}/>
            <Bug bug={'Bacteroidetes'}/>
          </div>
          <div className='row'>
            <Bug bug={'Actinobacteria'}/>
            <Bug bug={'Proteobacteria'}/>
            <Bug bug={'Lactobacillus'}/>
          </div>
          <div className='row'>
            <Bug bug={'Firmicutes'}/>
            <Bug bug={'Bacteroidetes'}/>
            <Bug bug={'Actinobacteria'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
