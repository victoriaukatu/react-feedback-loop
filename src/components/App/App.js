import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Home from '../Home/Home';



class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
      </div>
      <div>
      <Route exact path="/" component={Home}/>
      <Route path="/feeling" component={Feeling}/>
      <Route path="/understanding" component={Understanding}/>
      <Route path="/supported" component={Supported}/>
      </div>
      </Router>
      </>
        );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
