import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <div className="Understanding">
        <h2>Any comments that you want to leave?</h2>
        <h4>Comments</h4>
        <input/>
        <button>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Comments);