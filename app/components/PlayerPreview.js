import React from 'react';

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
      onClick={() => onReset(id)}
    >
      Reset
    </button>
  </div>
);

PlayerPreview.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  onReset: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
};
export default PlayerPreview;
