import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
  render() {
    return (
      <div className="Understanding">
        <h2>How well are you being supported?</h2>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <button>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Supported);