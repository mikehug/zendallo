import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import PlaylistPlayIcon from 'material-ui-icons/PlaylistPlay';
import Person from 'material-ui-icons/Person';
import GroupIcon from 'material-ui-icons/Group';
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
    color: theme.palette.common.darkWhite,
  },
});

const Dashboard = ({ classes }) => (
  <Grid container justify="center" spacing={24} className={classes.root} >
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Profile"
        content="Personal details and activities"
        background={{ background: 'linear-gradient(55.93deg, rgb(42, 171, 46) 0%, rgb(49, 204, 105) 100%)' }}
        progress={0}
        route="/profile"
        chip="1/5"
      > <Person className={classes.icon} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Team"
        content="Team activiies and managment"
        background={{ background: 'linear-gradient(135deg, rgb(240, 140, 0) 0%, rgb(246, 76, 42) 100%)' }}
        progress={0}
        route="/team"
        chip=""
      >
        <GroupIcon className={classes.icon} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Session"
        content="Create and find team sessions"
        progress={0}
        background={{ background: 'linear-gradient(101.12deg, rgb(108, 79, 224) 0%, rgb(77, 92, 200) 100%)' }}
        route="/session"
        chip=""
      >
        <GroupWorkIcon className={classes.icon} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Resources"
        content="Emotional intelligence activiites"
        progress={0}
        background={{ background: 'linear-gradient(to left top,  rgb(42, 171, 46) 0%, rgb(49, 204, 105) 100%)' }}
        route="/resources"
        chip=""
      >
        <PlaylistPlayIcon className={classes.icon} />
      </DashboardCard>
    </Grid>
  </Grid >
);

export default withStyles(styles, { name: 'Dashboard' })(Dashboard);
