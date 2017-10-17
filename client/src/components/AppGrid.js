// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
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

function AppGrid(props) {
  const { classes } = props;
  return (
    <Grid container align="center" direction="column" spacing={0} className={classes.content} >
      <Grid item md={1} />

      <Grid item xs={12} md={10} >
        { props.children }
      </Grid>

      <Grid item md={1} />
    </Grid>
  );
}

AppGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppGrid);
