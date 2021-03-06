
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

const App = () =>
  (<Router>
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/battle" exact component={Battle} />
        <Route path="/battle/results" exact component={Results} />
        <Route path="/popular/:lang" component={Popular} />
        <Route
          render={() => <p>Not found</p>}
        />
      </Switch>
    </div>
  </Router>);

module.exports = App;
