import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import profileImg from '../images/profile.png';
import feedbackImg from '../images/feedback.png';
import decisionImg from '../images/decision.png';

const styles = () => ({
  font: {
    fontFamily: 'Share Tech',
    textAlign: 'center',
  },
  row: {
    width: '100%',
  },
  paper: {
    padding: 30,
  },
  img: {
    padding: 30,
  },
  col: {
    margin: '10px',
    // paddingTop: '10px',
    // background: 'white',
    minWidth: '270px',
    paddingBottom: 40,
  },
});

const Features = ({ classes }) => (
  <Grid container justify="center" direction="row" spacing={0} className={classes.row}>
    <Grid item xs={10} sm={8} md={7} lg={6} className={classes.col} >


      <Typography className={classes.font} variant="display1" gutterBottom color="secondary" style={{ paddingTop: 20, paddingBottom: 10 }} >
        { 'Features' }

      </Typography>

      <Typography variant="headline" className={classes.font} >

With our 10 day trial you can try out all our great features for free

        <p />
        <Button
          variant="raised"
          onClick={() => { window.location.href = `${window.location.protocol}//${window.location.host}/app/signup`; }}
          color="secondary"
        >Get Started
        </Button>
        <p />
      </Typography>
      <Paper className={classes.paper}>

        <Typography variant="headline" color="secondary" className={classes.font} >

Meeting Management
        </Typography>

        <Typography variant="subheading" className={classes.font} >

Have more efficient and effective meetings with agenda collaboration and attendee profile sharing.
        </Typography>

        <img src={profileImg} alt="Profile Screenshot" width="90%" className={classes.img} />
        <p />

        <Typography variant="headline" color="secondary" className={classes.font} >

Real-Time Process Feedback
        </Typography>

        <Typography variant="subheading" className={classes.font} >

Better meetings through real-time non-verbal feedback to move meetings
 forward through constructive suggestions
        </Typography>

        <img src={feedbackImg} alt="Feedback Screenshot" width="90%" className={classes.img} />
        <p />

        <Typography variant="headline" color="secondary" className={classes.font} >

Visual Decision Making
        </Typography>

        <Typography variant="subheading" className={classes.font} >

Gain visibility into the entire teams perspective using a virtual team radar of opinions and perspectives
        </Typography>

        <img src={decisionImg} alt="Profile Screenshot" width="90%" className={classes.img} />

        <p />

      </Paper>
    </Grid>

  </Grid>
);

export default withStyles(styles)(Features);
