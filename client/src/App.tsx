import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PATHS } from './constants/path';
import './assets/css/index.css';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      // TODO: find an elegant way to use react router
      <Router history={createBrowserHistory()}>
        <Nav />
        <Switch>
          <Route exact path={PATHS.ABOUT}>
            <About />
          </Route>
          <Route exact path={PATHS.HOME}>
            <Home />
          </Route>
          <Route exact path={PATHS.CONTACT}>
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
