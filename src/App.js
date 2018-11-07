import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './helloworld'
import Test from './Todo'
import HelloWorld1 from './test1'
import Dog1 from './dog'


class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorld/>
          <HelloWorld1/>
          <Dog1/>
          <Test />
        </header>
      </div>
    );
  }
}

export default App;
