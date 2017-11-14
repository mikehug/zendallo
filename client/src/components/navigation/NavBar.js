// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
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
    position: 'absolute',
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
  },


});

const NavBar = withRouter((props) => {
  const {
    classes, user, handleLogout, handleDrawerToggle, location,
  } = props;

  return (
    <div >
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar >
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="secondary" noWrap className={classes.title}>
            {location.pathname.split('/').splice(2, 3).join(' - ').replace(/\b\w/g, l => l.toUpperCase())}
          </Typography>

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
