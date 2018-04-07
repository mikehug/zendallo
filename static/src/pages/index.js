import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { withRouter } from 'react-router';
import Typography from 'material-ui/Typography';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import Button from 'material-ui/Button';
import GroupIcon from 'material-ui-icons/Group';
import RadioButtonCheckedIcon from 'material-ui-icons/RadioButtonChecked';
import orange from 'material-ui/colors/orange';
import dasbboardPic from '../images/dashboard.png';

const styles = theme => ({
  hero: {
    height: '350px',
    background: '#ff6d92 radial-gradient(circle at center,#f5b200 0,#fc636b 80%,#ff6d92 100%)',
  },
  heroText: {
    fontFamily: 'Share Tech',
    fontSize: '35px',
    color: 'white',
    textAlign: 'center',
    maxWidth: '330px',
    paddingTop: 30,
  },
  textIntro: {
    fontFamily: 'Share Tech',
    color: 'white',
    fontSize: '28px',
    textAlign: 'center',
    maxWidth: '330px',
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
    paddingTop: 30,
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

const IndexPage = ({ classes, history }) => (
  <div>
    <Grid container justify="center" className={classes.hero} spacing={0} >
      <Grid item >
        <h1 className={classes.heroText} >
        Make Meetings Work
        </h1>
        <div className={classes.textIntro}>
        Effective and efficient teamwork
        </div>
        <Button
          variant="raised"
          color="secondary"
          style={{ marginLeft: 105, marginTop: 30, marginBottom: 40 }}
          onClick={() => { window.location.href = `${window.location.href}app/signup`; }} // eslint-ignore-line
        >
        Get Started
        </Button>

      </Grid>
      {/* <div className={classes.angle} >
        <svg className="decor" height="100%" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path fill="#fafafa" d="M0 0 L200 105 L0 108" strokeWidth="0" />
          </g>
        </svg>
      </div> */}
    </Grid>
    <Grid container direction="column" alignItems="center" className={classes.benefitRoot} spacing={0}>


      {/* <Grid container justify="center" justifyContent="center" direction="row" spacing={0} className={classes.row}>
        <Grid item xs={10} sm={7} md={6} className={classes.col} >


          <Typography className={classes.font} variant="display1" gutterBottom color="secondary" >
          Make Meetings Work
          </Typography>

          <Typography variant="headline" align="justify" className={classes.font} >

Effective teamwork and efficient collaboration <br /> for the digital workplace.

          </Typography>

        </Grid>
      </Grid> */}

      <Grid container justify="center" direction="row" spacing={0} className={classes.row}>
        <Grid item xs={9} sm={6} md={2} className={classes.col} >
          <Grid container direction="column" alignItems="center" >
            {/* <img src={Heart} alt="Heart Icon" className={classes.heart} /> */}
            <GroupIcon className={classes.svg} style={{ color: orange[500] }} />
            <Typography variant="headline" className={classes.font} >
            Meeting Management
            </Typography>
            <Button color="secondary" >  Engage</Button>
          </Grid>
        </Grid>
        <Grid item xs={9} sm={6} md={2} className={classes.col} >
          <Grid container direction="column" alignItems="center">
            {/* <img src={Team} alt="Team Icon" className={classes.svg} /> */}
            <RadioButtonCheckedIcon className={classes.svg} style={{ color: orange[500] }} />

            <Typography variant="headline" className={classes.font} >
            Realtime Feedback
            </Typography>
            <Button color="secondary" >  Align</Button>
          </Grid>
        </Grid>
        <Grid item xs={9} sm={6} md={2} className={classes.col} >
          <Grid container direction="column" justify="center" alignItems="center">
            {/* <img src={Scrum} alt="Organisation" className={classes.svg} /> */}
            <GroupWorkIcon className={classes.svg} style={{ color: orange[500] }} />
            <Typography variant="headline" className={classes.font} >
            Visual Decision Making
            </Typography>
            <Button color="secondary" >  Innovate</Button>
          </Grid>
        </Grid>
      </Grid>

      <img src={dasbboardPic} alt="Dashboard" style={{ width: '80%', maxWidth: '650', padding: '30px' }} />

      <Grid item xs={10} sm={7} md={6} >

        <Button
          variant="raised"
          color="secondary"
          onClick={() => { window.location.href = `${window.location.href}app/signup`; }}
        >Get Started
        </Button>

      </Grid>

    </Grid>
  </div>
);

export default withStyles(styles)(withRouter(IndexPage));
