import React, { Component } from 'react';

class Results extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div>Results: {this.props.location.search}</div>
    );
  }
}

module.exports = Results;
