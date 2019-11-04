import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';

// displays the results that were previously selected for each category
class Review extends Component {
  render() {
    return (
      <div className="Review">
        <h2>Review</h2>
        <h4>Feeling:</h4>
        <h4>Understanding:</h4>
        <h4>Supported:</h4>
        <h4>Comments:</h4>
        {/*Submit button posts the user's selections to the database */}
        <button>
          <Link to="/success">Submit</Link>
        </button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Review);