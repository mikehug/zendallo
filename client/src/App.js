import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AppGrid from './components/AppGrid';
import Team from './components/Team';
import Session from './components/Session';
import PrivateRoute from './components/PrivateRoute';

const theme = createMuiTheme();
// reset styles
const styles = () => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

class App extends Component { // eslint-disable-line 
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme} >
          <AppWrapper>
            <NavBar />
            <AppGrid>
              <Route path="/" exact component={Home} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/session" component={Session} />
              <PrivateRoute path="/team" component={Team} />
            </AppGrid>
          </AppWrapper>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
