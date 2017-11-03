// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = () => ({
  content: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});

function AppGrid(props) {
  const { classes } = props;
  return (
    <Grid container align="center" spacing={0} className={classes.content} >

      <Grid item xs={12} >
        { props.children }
      </Grid>

    </Grid>
  );
}

AppGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppGrid);
