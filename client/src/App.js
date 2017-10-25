import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import NavBar from './components/navigation/NavBar';
import Home from './components/Home';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import AppGrid from './components/utils/AppGrid';
import Team from './components/team/Team';
import Session from './components/session/Session';
import SessionDetail from './components/session/SessionDetail';
import PrivateRoute from './components/authentication/PrivateRoute';
import AppService from './AppService';
import { login, logout } from './components/authentication/Auth';

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

class App extends Component {
  state = {
    user: null,
  }

  componentWillMount() {
    if (window.localStorage && window.localStorage.getItem('feathers-jwt')) {
      login()
        .then(() => {
          this.setState({ user: AppService.get('user') });
        })
        .catch((error) => {
          console.log(`Error in jwt auth: ${error}`);
        });
    } else this.setState({ user: null });
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
              <Route exact path="/" component={Home} />
              <Route
                path="/signin"
                render={() => (
                  <SignIn handleLogin={this.handleLogin} />)}
              />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute exact path="/session" component={Session} />
              <PrivateRoute path="/session/:code" component={SessionDetail} />
              <PrivateRoute path="/team" component={Team} />
            </AppGrid>
          </AppWrapper>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
