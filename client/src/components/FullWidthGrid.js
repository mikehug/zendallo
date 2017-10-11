// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (

    <Grid container spacing={0} >
      <Grid item xs={1} sm={1} md={2} />

      <Grid item xs={10} sm={10} md={8} >
        <Paper className={classes.paper}>
          {props.children}
        </Paper>
      </Grid>

      <Grid item xs={1} sm={1} md={2} />
    </Grid>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
