import React, { Component } from 'react';
import Bug from './bug';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Bugs</h1>
          <div>These are some of the most commun bacteria and fungus types in the human gut microbiome</div>
          <div>Click on a bug to learn more from Wikipedia</div>
        </header>
        <div className="bugs-container">
          <div className='row'>
            <Bug bug={'Lactobacillus'}/>
            <Bug bug={'Firmicutes'}/>
            <Bug bug={'Actinobacteria'}/>
          </div>
          <div className='row'>
            <Bug bug={'Proteobacteria'}/>
            <Bug bug={'Bacteroides'}/>
            <Bug bug={'Clostridium'}/>
          </div>
          <div className='row'>
            <Bug bug={'Peptostreptococcus'}/>
              <Bug bug={'Bifidobacterium'}/>
              <Bug bug={'Escherichia'}/>
          </div>
          <div className='row'>
            <Bug bug={'Saccharomyces'}/>
            <Bug bug={'Aspergillus'}/>
            <Bug bug={'Sclerotinia'}/>
          </div>
          <div className='row'>
            <Bug bug={'Penicillium'}/>
            <Bug bug={'Rhodotorula'}/>
            <Bug bug={'Trametes'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
