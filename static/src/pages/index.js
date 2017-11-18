import React from 'react';
import Link from 'gatsby-link';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import GroupIcon from 'material-ui-icons/Group';
import RadioButtonCheckedIcon from 'material-ui-icons/RadioButtonChecked';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import lightBlue from 'material-ui/colors/lightBlue';
import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';


const styles = theme => ({
  hero: {
    height: '280px',
    background: '#ff6d92 radial-gradient(circle at center,#f5b200 0,#fc636b 80%,#ff6d92 100%)',
  },
  heroText: {
    fontFamily: 'Share Tech',
    fontSize: '40px',
    color: 'white',
    textAlign: 'center',
    maxWidth: '300px',
  },
  textIntro: {
    fontFamily: 'Share Tech',
    color: 'white',
    fontSize: '28px',
    textAlign: 'center',
    maxWidth: '300px',
  },
  angle: {
    paddingTop: 25,
    width: '100%',
    height: 100,
  },

  benefitRoot: {
    paddingBottom: '30px',
    background: theme.palette.background.default,
  },
  row: {
    maxWidth: 1280,
  },
  col: {
    margin: '10px',
    // paddingTop: '10px',
    // background: 'white',
    minWidth: '270px',
  },
  font: {
    fontFamily: 'Share Tech',
    textAlign: 'center',
  },
  heart: {
    animation: 'pulse 1s ease infinite',
    width: 100,
  },
  svg: {
    width: 60,
    height: 60,
    padding: 12,
  },
});

const IndexPage = ({ classes }) => (
  <div>
    <Grid container justify="center" className={classes.hero} spacing={0} >
      <Grid item >
        <h1 className={classes.heroText} >
        Team Engagement
        </h1>
        <div className={classes.textIntro}>
          Visual Collaboration and Facilitation Tools
        </div>
      </Grid>
      <div className={classes.angle} >
        <svg className="decor" height="100%" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path fill="#fafafa" d="M0 0 L200 105 L0 108" strokeWidth="0" />
          </g>
        </svg>
      </div>
    </Grid>
    <Grid container direction="column" alignItems="center" className={classes.benefitRoot} spacing={0}>
      <Typography className={classes.font} type="display1" gutterBottom color="accent" >
        { 'Digital Participation' }

      </Typography>
      <Grid container justify="center" justifyContent="center" direction="row" spacing={0} className={classes.row}>
        <Grid item xs={10} sm={7} md={3} className={classes.col} >
          <Grid container direction="column" alignItems="center" >
            {/* <img src={Heart} alt="Heart Icon" className={classes.heart} /> */}
            <GroupIcon className={classes.svg} style={{ color: green[400] }} />
            <Typography type="headline" className={classes.font} >
            Trust Building
            </Typography>
            <Button color="accent" >  Learn</Button>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={3} className={classes.col} >
          <Grid container direction="column" alignItems="center">
            {/* <img src={Team} alt="Team Icon" className={classes.svg} /> */}
            <RadioButtonCheckedIcon className={classes.svg} style={{ color: orange[400] }} />

            <Typography type="headline" className={classes.font} >
            Realtime Feedback
            </Typography>
            <Button color="accent" >  Interact</Button>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={3} className={classes.col} >
          <Grid container direction="column" justify="center" alignItems="center">
            {/* <img src={Scrum} alt="Organisation" className={classes.svg} /> */}
            <GroupWorkIcon className={classes.svg} style={{ color: lightBlue[400] }} />
            <Typography type="headline" className={classes.font} >
            Visual Decisions
            </Typography>
            <Button color="accent" >  Align</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(IndexPage);
