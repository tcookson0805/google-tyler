import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Main from '../main/main.js';
import Result from '../result/result.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/result' component={Result} />
        </Switch>
      </div>
    );
  }
}

export default App;
