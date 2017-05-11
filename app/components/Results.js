import Debug from 'debug';
import React from 'react';

const debug = Debug('app');

const Results = ({ location }) => {
  debug(location);
  return (
    <div>Results: {location.search}</div>
  );
};

Results.propTypes = {
  location: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default Results;
