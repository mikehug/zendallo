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
    marginTop: theme.spacing.unit * 10,
    width: '100%',
  },
  logo: {
    paddingRight: 10,
  },
  font: {
    fontFamily: 'Share Tech',
    textAlign: 'center',
  },
});

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />

          <Typography type="headline" color="secondary" className={classes.font}>
            INITIAT.IO
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
