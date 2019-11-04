import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Feeling extends Component {

  state = {
    feeling: '',
  }

  handleFeelingChoice = (event) => {
    this.setState({
      feeling: event.target.value
    })
    console.log('A feeling was selected');
    console.log('before function', this.state.feeling)
    console.log(this.state);
    // this.props.dispatch({type: 'SET_FEELING' , payload: this.state.feeling})
  }

  render() {
    return (
      <div className="Feeling">
        <h2>How are you feeling today?</h2>
        {/* <input placeholder="feeling" value={this.state.feeling}></input> */}
        <select 
        value={this.state}
        onChange={this.handleFeelingChoice}>
          <option value=""></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Feeling);
