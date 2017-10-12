// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  content: {
    marginLeft: 5,
    marginRight: 5,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (

    <Grid container spacing={0} className={classes.content} >
      <Grid item xs={0} md={1} />

      <Grid item xs={12} md={10} >
        {props.children}
      </Grid>

      <Grid item xs={0} md={1} />
    </Grid>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
