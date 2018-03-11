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
  <Grid container justify="center" justifyContent="center" direction="row" spacing={0} className={classes.row}>
    <Grid item xs={10} sm={8} md={7} lg={6} className={classes.col} >


      <Typography className={classes.font} type="display1" gutterBottom color="secondary" style={{ paddingTop: 20, paddingBottom: 10 }} >
        { 'Features' }

      </Typography>

      <Typography type="headline" className={classes.font} >

With our 10 day trial you can try out all our great features for free

        <p />
        <Button raised color="secondary" >Get Started</Button>
        <p />
      </Typography>
      <Paper className={classes.paper}>

        <Typography type="headline" color="secondary" className={classes.font} >

Online Team Building
        </Typography>

        <Typography type="subheading" className={classes.font} >

Build great teams through our behavioural profile and trust building activities
        </Typography>

        <img src={profileImg} alt="Profile Screenshot" width="90%" className={classes.img} />
        <p />

        <Typography type="headline" color="secondary" className={classes.font} >

Real-Time Process Feedback
        </Typography>

        <Typography type="subheading" className={classes.font} >

Better meetings through real-time non-verbal feedback to move meetings
 forward through constructive suggestions
        </Typography>

        <img src={feedbackImg} alt="Feedback Screenshot" width="90%" className={classes.img} />
        <p />

        <Typography type="headline" color="secondary" className={classes.font} >

Visual Decision Making
        </Typography>

        <Typography type="subheading" className={classes.font} >

Gain visibility into the entire teams perspective using a virtual team radar of opinions and perspectives
        </Typography>

        <img src={decisionImg} alt="Profile Screenshot" width="90%" className={classes.img} />

        <p />

      </Paper>
    </Grid>

  </Grid>
);

export default withStyles(styles)(Features);