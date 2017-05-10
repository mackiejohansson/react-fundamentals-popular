
import React from 'react';
import { render } from 'react-dom';

require('./index.css');
const App = require('./components/App');

render(
  <App />,
  document.getElementById('app'),
);
