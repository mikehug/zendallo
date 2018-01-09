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
            <Button color="accent" disabled >  Learn</Button>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={3} className={classes.col} >
          <Grid container direction="column" alignItems="center">
            {/* <img src={Team} alt="Team Icon" className={classes.svg} /> */}
            <RadioButtonCheckedIcon className={classes.svg} style={{ color: orange[400] }} />

            <Typography type="headline" className={classes.font} >
            Realtime Feedback
            </Typography>
            <Button color="accent" disabled >  Interact</Button>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={3} className={classes.col} >
          <Grid container direction="column" justify="center" alignItems="center">
            {/* <img src={Scrum} alt="Organisation" className={classes.svg} /> */}
            <GroupWorkIcon className={classes.svg} style={{ color: lightBlue[400] }} />
            <Typography type="headline" className={classes.font} >
            Visual Decisions
            </Typography>
            <Button color="accent" disabled >  Align</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justify="center" justifyContent="center" direction="row" spacing={0} className={classes.row}>
        <Grid item xs={10} sm={7} md={9} className={classes.col} >

          <Typography className={classes.font} type="headline" gutterBottom style={{ paddingTop: 30 }} >
          What is the problem?
          </Typography>

          <Typography type="subheading" align="justify" >

  In the digital workplace, companies increasingly rely on technology to collaborate. Many teams fail to benefit from the creative collisions that in-person engagement yields. The complexity of the digital landscape impacts teamwork, trust and performance, leading to costly decisions.
          </Typography>

          <Typography className={classes.font} type="headline" gutterBottom style={{ paddingTop: 30 }} >
          Our Solution
          </Typography>

          <Typography type="subheading" align="justify" >
We want to change this and have created a mechanism for organizations to hear their team’s perspectives, so teams can reach decisions faster with higher levels of individual buy in. We provide team alignment and participatory process improvement tools specifically designed to address interpersonal disconnect of the workplace. Enabling better team engagement and participation which leads to improved collective decision making.
          </Typography>

          <Typography className={classes.font} type="headline" gutterBottom style={{ paddingTop: 30 }} >
          Company
          </Typography>

          <Typography type="subheading" align="justify" >

 Initiatio <i>(e-nish-e-a-toe)</i> is the latin for 'participation and initiation'. We are passionate about engagement, transparency and participation which lead to improved organizational decision making and better outcomes.
          The digital landscape is changing the way teams collaborate - we are working to enhance the human experience of this process. We are currently in private beta but our public launch is coming soon.
          </Typography>


          <Typography className={classes.font} type="display1" gutterBottom color="primary" style={{ paddingTop: 50 }} >
            { 'Who are we?' }

          </Typography>


          <Typography type="headline" color="primary" className={classes.font} >

Sue Redmond, PhD
          </Typography>

          <Typography type="subheading" color="primary" className={classes.font} >

CEO & Co-Founder - @suezredmond
          </Typography>

          <Typography type="subheading" align="justify" >

With a career in human behavior change, curriculum development and organizational culture change nationally & internationally, Sue co-founded Initiatio to help organizations listen to and hear the voice of their greatest resource their people. Fuelling a new wave of transparency in leadership, engagement and participation.
          Sue is a passionate triathlete, ironman, surfer, former martial artist and dog lover!
Check out her book ‘The Athlete’s Secret Garden’ on Amazon.co.uk.
          </Typography>

          <Typography type="headline" color="primary" className={classes.font} style={{ paddingTop: 30 }}>
            Mike Hughes
          </Typography>

          <Typography type="subheading" color="primary" className={classes.font} >

CTO & Co-Founder - @mikehug
          </Typography>

          <Typography type="subheading" align="justify" >
 With over 20 years software design and development, Mike has created software in multiple industries working with globally distributed teams. Most recently he helped lead the redesign of the world's leading enterprise workforce optimization suites.
 He has a passion for crafty design and nifty solutions. Mike is one of the most enthusiastic and energetic people you are likely to meet!
          </Typography>


        </Grid>
      </Grid>


    </Grid>
  </div>
);

export default withStyles(styles)(IndexPage);
