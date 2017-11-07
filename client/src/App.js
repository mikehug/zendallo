import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import deepOrange from 'material-ui/colors/deepOrange';
import lightBlue from 'material-ui/colors/lightBlue';
import NavBar from './components/navigation/NavBar';
import Home from './components/Home';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import AppGrid from './components/utils/AppGrid';
import Team from './components/team/Team';
import Session from './components/session/Session';
import SessionDetail from './components/session/SessionDetail';
import PrivateRoute from './components/authentication/PrivateRoute';
import { logout, login } from './components/authentication/Auth';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue, // Purple and lightBlue play nicely together.
    secondary: {
      ...deepOrange,
      // A400: '#00e677',
    },
  },
});
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

class App extends Component {
  state = {
    user: null,
  }

  handleLogin = credentials => login(credentials)
    .then((result) => {
      this.setState({ user: result });
    })

  handleLogout =() => {
    logout();
    this.setState({ user: null });
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme} >
          <AppWrapper>
            <NavBar user={this.state.user} handleLogout={this.handleLogout} />
            <AppGrid>
              <Route exact path="/app/" component={Home} />
              <Route
                path="/app/signin"
                render={() => (
                  <SignIn handleLogin={this.handleLogin} />)}
              />
              <Route path="/app/signup" component={SignUp} />
              <PrivateRoute exact path="/app/session" component={Session} />
              <PrivateRoute path="/app/session/:code" component={SessionDetail} />
              <PrivateRoute path="/app/team" component={Team} />
            </AppGrid>
          </AppWrapper>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
