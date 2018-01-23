
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import React from 'react';

import Home from 'components/home';
import About from 'components/about';
import Blog from 'components/blog';
import Error404 from 'components/404';


export default function Root() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route component={Error404} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

