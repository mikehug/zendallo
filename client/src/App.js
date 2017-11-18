import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import deepOrange from 'material-ui/colors/deepOrange';
import lightBlue from 'material-ui/colors/lightBlue';
import NavBar from './components/navigation/NavBar';
import NavDrawer from './components/navigation/NavDrawer';
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
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
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

  handleLogout =() => {
    logout();
    this.setState({ user: null });
  }

   handleLogin = credentials => login(credentials)
     .then((result) => {
       this.setState({ user: result });
     })
     .catch(() => {
       this.handleLogout();
     })

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    return (
      <Router basename="/app" >
        <MuiThemeProvider theme={theme} >
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <NavBar user={this.state.user} handleDrawerToggle={this.handleDrawerToggle} handleLogout={this.handleLogout} />
              <NavDrawer mobileOpen={this.state.mobileOpen} handleDrawerToggle={this.handleDrawerToggle} user={this.state.user} />
              <main className={classes.content}>
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
