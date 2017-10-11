// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import logo from '../logo.svg';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 0,
    width: '100%',
  },
  logo: {
    paddingRight: 10,
  },
});

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />

          <Typography type="headline" color="inherit">
            INITIATIO
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
