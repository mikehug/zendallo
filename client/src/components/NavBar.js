// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import logo from '../logo.svg';
import AppService from '../AppService';
import { logout } from '../Auth';


const styles = theme => ({
  root: {
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
    paddingRight: 10,
  },
  name: {
    flex: 1,
    fontFamily: 'Share Tech',
  },
});

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link to="/" href="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <Typography type="headline" color="secondary" className={classes.name}>
            INITIAT.IO
          </Typography>
          { AppService.get('user') ?
            <Link to="/" href="/" >
              <Button onClick={() => logout()} >
                Sign Out
              </Button>
            </Link>
            :
            <Link to="/signin" href="/signin" >
              <Button>
                Sign In
              </Button>
            </Link>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
