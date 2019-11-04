import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <>
      <div className="Home">
        Please click the button in order to enter your feedback!
      </div>
      <br />
      <div className="Home">
        {/* This button leads user to first page of feedback */}
        <button>
            <Link to="/feeling">Begin Feedback</Link>
        </button>
      </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);