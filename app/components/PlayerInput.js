import React, { Component } from 'react';

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault(this.username);
    this.props.onSubmit(this.props.id, this.username);
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="git username"
          type="text"
          autoComplete="off"
          onChange={(e) => {
            this.username = e.target.value;
          }}
        />
        <button
          className="button"
          type="submit"
        >
            Submit
          </button>
      </form>
    );
  }
}
PlayerInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};
PlayerInput.defaultProps = {
  label: 'Username',
};
module.exports = PlayerInput;
