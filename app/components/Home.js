import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h1>Battle on da git fub</h1>
    <Link className="button" to="/battle">
      Battla
    </Link>
  </div>
);

module.exports = Home;
