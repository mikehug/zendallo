import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ProfileResult from '../resources/components/ProfileResult';
import { getUser } from '../authentication/Auth';

const styles = {
  root: {
    minWidth: 350,
    marginTop: 22,
    marginRight: 12,
    marginLeft: 4,
  },
};

const Profile = ({ classes }) => {
  const user = getUser();
  return (
    <Grid className={classes.root}>
      <Paper>
        {user.profileResult ? (
          <ProfileResult result={user.profileResult.result} />
        ) : (
          <Paper />
        )}
      </Paper>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
