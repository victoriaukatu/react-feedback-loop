import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        {/* Page for optional comments*/}
        <h2>Any comments that you want to leave?</h2>
        <h4>Comments</h4>
        <input/>
        {/* This button leads to where user reviews selections before submitting */}
        <button>
          <Link to="/review">Next</Link>
        </button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Comments);