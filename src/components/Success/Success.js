import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {
  render() {
    return (
        <>
        {/* This page is displayed upon successful submission by user */}
      <div className="Success">
        <h2>Your feedback has been recorded.</h2>
      </div>
      <br />
      <div className="Success">
        <h3>Thank you!</h3>
      </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Success);