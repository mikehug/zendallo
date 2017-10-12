import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import withRoot from './styles/withRoot';
import NavBar from './components/NavBar';
import FullWidthGrid from './components/FullWidthGrid';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';        
// In your render...

class App extends Component { // eslint-disable-line 
  render() {
    return (
      <div>
        <NavBar />
        <FullWidthGrid >
          {'Hello World'}
        </FullWidthGrid>
      </div>
    );
  }
}

export default withRoot(App);
