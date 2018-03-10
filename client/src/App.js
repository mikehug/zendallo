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
import PrivateRoute from './components/authentication/PrivateRoute';
import { logout, login } from './components/authentication/Auth';
import asyncComponent from './components/utils/AsyncComponent';
import AppGrid from './components/utils/AppGrid';
import Home from './components/Home';

import NavBar from './components/navigation/NavBar';
import NavDrawer from './components/navigation/NavDrawer';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
// import Profile from './components/profile/Profile';
// import Team from './components/team/Team';
// import Challenge from './components/challenge/Challenge';
// import Idea from './components/idea/Idea';
// import Session from './components/session/Session';
// import SessionDetail from './components/session/SessionDetail';
// import Dashboard from './components/dashboard/Dashboard';
// import Resources from './components/resources/Resources';
// import Learn from './components/resources/Learn';

const AsyncIdea = asyncComponent(() => import('./components/idea/Idea'));
const AsyncLearn = asyncComponent(() => import('./components/resources/Learn'));
const AsyncTeam = asyncComponent(() => import('./components/team/Team'));
const AsyncProfile = asyncComponent(() => import('./components/profile/Profile'));
const AsyncSession = asyncComponent(() => import('./components/session/Session'));
const AsyncChallenge = asyncComponent(() => import('./components/challenge/Challenge'));
const AsyncDashboard = asyncComponent(() => import('./components/dashboard/Dashboard'));
const AsyncResources = asyncComponent(() => import('./components/resources/Resources'));
const AsyncSessionDetail = asyncComponent(() => import('./components/session/SessionDetail'));

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
                  <PrivateRoute exact path="/ideas" component={AsyncIdea} />
                  <PrivateRoute exact path="/challenges" component={AsyncChallenge} />
                  <PrivateRoute exact path="/sessions" component={AsyncSession} />
                  <PrivateRoute exact path="/dashboard" component={AsyncDashboard} />
                  <PrivateRoute path="/session/:code" component={AsyncSessionDetail} />
                  <PrivateRoute path="/teams" component={AsyncTeam} />
                  <PrivateRoute path="/profile" component={AsyncProfile} />
                  <PrivateRoute exact path="/resources" component={AsyncResources} />
                  <PrivateRoute path="/resources/:course" component={AsyncLearn} />
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
