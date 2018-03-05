import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import deepOrange from 'material-ui/colors/deepOrange';
import NavBar from './components/navigation/NavBar';
import NavDrawer from './components/navigation/NavDrawer';
import Home from './components/Home';
import SignIn from './components/authentication/SignIn';
import Profile from './components/profile/Profile';
import SignUp from './components/authentication/SignUp';
import AppGrid from './components/utils/AppGrid';
import Team from './components/team/Team';
import Challenge from './components/challenge/Challenge';
import Idea from './components/idea/Idea';
import Session from './components/session/Session';
import SessionDetail from './components/session/SessionDetail';
import Dashboard from './components/dashboard/Dashboard';
import Resources from './components/resources/Resources';
import Learn from './components/resources/Learn';
import PrivateRoute from './components/authentication/PrivateRoute';
import { logout, login } from './components/authentication/Auth';

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: { main: blue[500] }, // Purple and lightBlue play nicely together.
    secondary: {
      main: deepOrange[400],
      // A400: '#00e677',
    },
  },
});

const styles = () => ({
  '@global': {
    html: {
      background: theme.palette.grey[200],
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
  root: {
    width: '100%',
    // height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    background: theme.palette.grey[200],
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: 'calc(100% - 56px)',
    marginTop: 56,

    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 250,
    },
  },
});

class App extends React.Component {
  state = {
    mobileOpen: false,
    user: null,
  };

  componentWillMount() {
    this.handleLogin();
  }

  handleLogout = () => {
    logout();
    this.setState({ user: null });
  };

  handleLogin = credentials =>
    login(credentials)
      .then((result) => {
        this.setState({ user: result });
      })
      .catch((error) => {
        this.handleLogout();
        throw error;
      });

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    return (
      <Router basename="/app">
        <MuiThemeProvider theme={theme}>
          <div>
            <Reboot />
            <div className={classes.appFrame}>
              <NavBar
                user={this.state.user}
                handleDrawerToggle={this.handleDrawerToggle}
                handleLogout={this.handleLogout}
              />
              <NavDrawer
                mobileOpen={this.state.mobileOpen}
                handleDrawerToggle={this.handleDrawerToggle}
                user={this.state.user}
              />
              <main className={classes.content}>
                <AppGrid>
                  <Route exact path="/" component={Home} />
                  <Route
                    path="/signin"
                    render={() => <SignIn handleLogin={this.handleLogin} />}
                  />
                  <Route path="/signup" component={SignUp} />
                  <PrivateRoute exact path="/ideas" component={Idea} />
                  <PrivateRoute
                    exact
                    path="/challenges"
                    component={Challenge}
                  />
                  <PrivateRoute exact path="/sessions" component={Session} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute
                    path="/session/:code"
                    component={SessionDetail}
                  />
                  <PrivateRoute path="/teams" component={Team} />
                  <PrivateRoute path="/profile" component={Profile} />
                  <PrivateRoute exact path="/resources" component={Resources} />
                  <PrivateRoute path="/resources/:course" component={Learn} />
                </AppGrid>
              </main>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
