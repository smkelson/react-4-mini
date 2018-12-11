import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/route1">Route1</Link>
          <Link to="/route2">Route2</Link>
          <Link to="/route3">Route3</Link>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
