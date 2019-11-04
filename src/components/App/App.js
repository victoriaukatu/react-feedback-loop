import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Home from '../Home/Home';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';
import Review from '../Review/Review';



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
      {/* The routes define the paths which allow for navigation between pages */}
      <Route exact path="/" component={Home}/>
      <Route path="/feeling" component={Feeling}/>
      <Route path="/understanding" component={Understanding}/>
      <Route path="/supported" component={Supported}/>
      <Route path="/comments" component={Comments}/>
      <Route path="/success" component={Success}/>
      <Route path="/review" component={Review}/>
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
