import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
        <>
      <div className="Home">
        Please click the button in order to enter your feedback!
      </div>
      <br />
      <div className="Home">
        <button>Begin Feedback</button>
      </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);