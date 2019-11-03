import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

  state = {
    feeling: '',
  }

  handleFeelingChoice = (event) => {
    console.log('Hello! :D');
    // this.setState({
    //   feeling: event.target.value
    // })
  }

  render() {
    return (
      <div className="Feeling">
        <h2>How are you feeling today?</h2>
        <select >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <button onClick={this.handleFeelingChoice}>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Feeling);