// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import PowerIcon from 'material-ui-icons/PowerSettingsNew';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    // width: '100%',
    marginTop: theme.spacing.unit * 8,
    '@media (min-width:0px) and (orientation: landscape)': {
      marginTop: theme.spacing.unit * 7,
    },
    '@media (min-width:600px)': {
      marginTop: theme.spacing.unit * 9,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flex: 1,
    textAlign: 'center',
    // color: 'white',
    // marginLeft: -5,
    [theme.breakpoints.up('md')]: {
      marginLeft: 50,
    },
  },
});

const logout = (handleLogout, history) => {
  handleLogout();
  history.push('/');
};

const NavBar = withRouter((props) => {
  const {
    classes, user, handleLogout, handleDrawerToggle, location, history,
  } = props;

  return (
    <div >
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar >
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" noWrap className={classes.title} color="inherit">
            {location.pathname.split('/').splice(1, 1).join(' - ').replace(/\b\w/g, l => l.toUpperCase())}
          </Typography>

          {/* user prop from app start check for JWT in localstorage otherwise in app check app service */}
          {/* <Button  >
                Sign Out
            </Button> */}
          { user ?

            <IconButton onClick={() => logout(handleLogout, history)} color="inherit">

              <PowerIcon />
            </IconButton>
            :
            <Button onClick={() => history.push('/signin')} color="inherit" >
                Sign In
            </Button>
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
