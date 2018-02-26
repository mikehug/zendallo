import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import PlaylistPlayIcon from 'material-ui-icons/PlaylistPlay';
import Person from 'material-ui-icons/Person';
import GroupIcon from 'material-ui-icons/Group';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import MyLocation from 'material-ui-icons/MyLocation';
import deepOrange from 'material-ui/colors/deepOrange';
import lightGreen from 'material-ui/colors/lightGreen';
import pink from 'material-ui/colors/pink';
import teal from 'material-ui/colors/teal';
import purple from 'material-ui/colors/purple';
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
        heading="Challenges"
        content="Create and view challenges"
        background={{ }}
        progress={0}
        route="/challenges"
        chip=""
      >
        <MyLocation className={classes.icon} style={{ color: deepOrange[300] }} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Ideas"
        content="Create and view ideas"
        progress={0}
        background={{ }}
        route="/ideas"
        chip=""
      >
        <LightbulbOutline className={classes.icon} style={{ color: purple[500] }} />
      </DashboardCard>
    </Grid>

    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Sessions"
        content="Create and access sessions"
        progress={0}
        background={{ }}
        route="/sessions"
        chip=""
      >
        <GroupWorkIcon className={classes.icon} style={{ color: lightGreen[500] }} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Teams"
        content="Team listing and information"
        background={{ }}
        progress={0}
        route="/teams"
        chip=""
      >
        <GroupIcon className={classes.icon} style={{ color: lightBlue[500] }} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Profile"
        content="Your details and settings"
        progress={0}
        background={{ }}
        route="/profile"
        chip="1/5"
      > <Person className={classes.icon} style={{ color: teal[300] }} />
      </DashboardCard>
    </Grid>
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <DashboardCard
        heading="Resources"
        content="Information and training "
        progress={0}
        background={{ }}
        route="/resources"
        chip=""
      >
        <PlaylistPlayIcon className={classes.icon} style={{ color: pink[500] }} />
      </DashboardCard>
    </Grid>
  </Grid >
);

export default withStyles(styles, { name: 'Dashboard' })(Dashboard);
