import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
      </div>
      <div className="App">
        Please click the button in order to enter your feedback!
      </div>
      <br />
      <div className="App">
        <button>Begin Feedback</button>

      </div>
      </>
        );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
