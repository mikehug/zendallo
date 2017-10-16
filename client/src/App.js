import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AppGrid from './components/AppGrid';
import Team from './components/Team';

// withRoot HOC expects component
class App extends Component { // eslint-disable-line 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <AppGrid>
            <Route path="/" exact component={Home} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/team" componet={Team} />
          </AppGrid>
        </div>
      </Router>
    );
  }
}

export default App;
