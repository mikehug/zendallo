import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import PlaylistPlayIcon from 'material-ui-icons/PlaylistPlay';
import Person from 'material-ui-icons/Person';
import GroupIcon from 'material-ui-icons/Group';
import orange from 'material-ui/colors/orange';
import lightGreen from 'material-ui/colors/lightGreen';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import lightBlue from 'material-ui/colors/lightBlue';
import DashboardCard from './DashboardCard';


const styles = theme => ({
  root: {
    marginTop: 10,
    padding: theme.spacing.unit * 1,
    width: '100%',
    maxWidth: 1200,
  },
  icon: {
    height: 50,
    width: 50,
  },
});

const Dashboard = ({ classes }) => (
  <Grid container justify="center" spacing={24} className={classes.root} >
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Profile"
        content="Personal details and activities"
        progress={0}
        background={{ }}
        route="/profile"
        chip="1/5"
      > <Person className={classes.icon} style={{ color: red[500] }} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Team"
        content="Team activiies and managment"
        background={{ }}
        progress={0}
        route="/team"
        chip=""
      >
        <GroupIcon className={classes.icon} style={{ color: lightGreen[500] }} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Session"
        content="Create and find team sessions"
        progress={0}
        background={{ }}
        route="/session"
        chip=""
      >
        <GroupWorkIcon className={classes.icon} style={{ color: orange[500] }} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Resources"
        content="Emotional intelligence activiites"
        progress={0}
        background={{ }}
        route="/resources"
        chip=""
      >
        <PlaylistPlayIcon className={classes.icon} style={{ color: lightBlue[500] }} />
      </DashboardCard>
    </Grid>
  </Grid >
);

export default withStyles(styles, { name: 'Dashboard' })(Dashboard);
