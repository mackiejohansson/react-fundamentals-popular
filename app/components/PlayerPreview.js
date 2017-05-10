import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = ({ avatar, username, id, onReset }) => (
  <div>
    <img
      className="avatar"
      src={avatar}
      alt={`Avatar for ${username}`}
    />
    <h2 className="username">@{username}</h2>
    <button
      className="reset"
      onClick={onReset.bind(null, id)}
    >
      Reset
    </button>
  </div>
);

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
module.exports = PlayerPreview;
