// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import LogoButton from './LogoButton';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    marginTop: theme.spacing.unit * 8,
    '@media (min-width:0px) and (orientation: landscape)': {
      marginTop: theme.spacing.unit * 7,
    },
    '@media (min-width:600px)': {
      marginTop: theme.spacing.unit * 9,
    },
  },
  logo: {
    flex: 1,
  },


});

const NavBar = withRouter((props) => {
  const {
    classes, user, history, handleLogout,
  } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <div className={classes.logo} >
            <LogoButton onClick={() => history.push('/app')} />
          </div>
          {/* user prop from app start check for JWT in localstorage otherwise in app check app service */}
          { user ?
            <Link to="/app" href="/app" >
              <Button onClick={() => handleLogout()} >
                Sign Out
              </Button>
            </Link>
            :
            <Link to="/app/signin" href="/app/signin" >
              <Button color="accent" >
                Sign In
              </Button>
            </Link>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
});

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
