import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import mikePic from '../images/mike.jpeg';
import suePic from '../images/sue.jpg';
import LogoSvg from '../layouts/LogoSvg';

const styles = theme => ({
  font: {
    fontFamily: 'Share Tech',
    textAlign: 'center',
  },
  row: {
    width: '100%',
  },
  paper: {
    padding: 20,
  },
  profile: {
    width: 160,
    borderRadius: '320px;',

  },
  logoText: {
    fontFamily: 'Share Tech',
    fontSize: '30px',
    fontWeight: 800,
    paddingLeft: 2,
    paddingBottom: 3,
    color: theme.palette.grey[700],

  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
  },
  profileRow: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  col: {
    margin: '10px',
    // paddingTop: '10px',
    // background: 'white',
    minWidth: '270px',
    paddingBottom: 40,
  },
});

const CompanyPage = ({ classes }) => (
  <Grid container justify="center" justifyContent="center" direction="row" spacing={0} className={classes.row}>
    <Grid item xs={10} sm={8} md={7} lg={6} className={classes.col} >

      <Typography className={classes.font} variant="display1" gutterBottom color="secondary" style={{ paddingTop: 20, paddingBottom: 20 }} >
        { 'Company' }

      </Typography>
      <Paper className={classes.paper}>

        <div className={classes.headerRow} >
          <LogoSvg />
          {/* <div className={classes.logoText} >
            Zendallo
          </div> */}
        </div>
        <Typography variant="headline" color="textSecondary" className={classes.font} >

      Zendallo means 'from insight'
          <p />
        </Typography>

        <Typography variant="subheading" color="textSecondary" className={classes.font} >

 We provide team building expertise and cutting edge collective intelligence tools that enable leaders and organisations have rich conversations around innovation and engagement.
        Zendallo is headquartered in Ireland.

        </Typography>
        <div className={classes.buttonRow} >

          <Button
            variant="raised"
            onClick={() => { window.location.href = `${window.location.href}app/signup`; }}
          >Contact Us
          </Button>
        </div>


        <div className={classes.profileRow} >

          <img src={suePic} alt="Sue Redmond" className={classes.profile} />
        </div>

        <Typography variant="title" color="secondary" className={classes.font} style={{ paddingTop: 20 }} >

Sue Redmond, PhD
        </Typography>

        <Typography variant="subheading" color="secondary" className={classes.font} >

CEO & Co-Founder - @suezredmond
        </Typography>
        <p />
        <Typography variant="body1" align="justify" color="textSecondary" >

With a career in human behavior change, curriculum development and organizational culture change nationally & internationally, Sue co-founded Zendallo to help organizations listen to and hear the voice of their greatest resource their people - fuelling a new wave of transparency in leadership, engagement and participation.

         Sue is a passionate triathlete, ironman, surfer, former martial artist and dog lover!

Check out her book ‘The Athlete’s Secret Garden’ on Amazon.co.uk.
        </Typography>

        <div className={classes.profileRow} >

          <img src={mikePic} alt="Mike Hughes" className={classes.profile} />
        </div>

        <Typography variant="title" color="secondary" className={classes.font} style={{ paddingTop: 20 }}>
            Mike Hughes
        </Typography>

        <Typography variant="subheading" color="secondary" className={classes.font} >

CTO & Co-Founder - @mikehug
        </Typography>
        <p />

        <Typography variant="body1" align="justify" color="textSecondary" >
 With over 20 years software design and development, Mike has created software in multiple industries working with globally distributed teams. Most recently he helped lead the redesign of the world's leading enterprise workforce optimization suites.

        He has a passion for crafty design and nifty solutions. Mike is one of the most enthusiastic and energetic people you are likely to meet!
        </Typography>
      </Paper>

    </Grid>

  </Grid>
);

export default withStyles(styles)(CompanyPage);
