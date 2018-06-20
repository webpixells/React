import React, { Component,Fragment } from 'react';
import './App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
    	<Fragment>
      <div className="App">
      <Main/>
      </div>
    	</Fragment>
    );
  }
}

export default App;
