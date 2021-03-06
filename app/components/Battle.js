import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: null,
      playerTwoName: null,
      playerOneImage: null,
      playerTwoImage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, username) {
    this.setState({
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size=200`,
    });
  }
  handleReset(id) {
    this.setState({
      [`${id}Name`]: null,
      [`${id}Image`]: null,
    });
  }
  render() {
    const match = this.props.match;
    const playerOneName = this.state.playerOneName;
    const playerTwoName = this.state.playerTwoName;
    const playerOneImage = this.state.playerOneImage;
    const playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className="row">
          {!playerOneName &&
          <PlayerInput
            id="playerOne"
            label="Player One"
            onSubmit={this.handleSubmit}
          />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              id="playerOne"
              onReset={this.handleReset}
            />}

          {!playerTwoName &&
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={this.handleSubmit}
          />}

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              id="playerTwo"
              onReset={this.handleReset}
            />}
        </div>
        {playerOneImage && playerTwoImage &&
        <Link
          className="button"
          to={{
            pathname: `${match.url}/results`,
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
          }}
        >
            Battle
        </Link>}
      </div>
    );
  }
}

Battle.propTypes = {
  match: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default Battle;
