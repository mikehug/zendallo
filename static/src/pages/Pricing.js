import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import GroupIcon from 'material-ui-icons/Group';
import RadioButtonCheckedIcon from 'material-ui-icons/RadioButtonChecked';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';


const styles = () => ({
  font: {
    fontFamily: 'Share Tech',
    textAlign: 'center',
  },
  row: {
    width: '100%',
  },
  listItem: {
    paddingBottom: 10,
  },
  list: {
    paddingRight: 16,
  },
  profile: {
    width: '100%',
    borderRadius: '320px;',

  },
  caption: {
    width: 125,
    paddingLeft: 25,
  },
  profileRow: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
  },
  paper: {
    margin: 16,
  },
  col: {
    margin: '20px',
    paddingTop: '10px',
    // background: 'white',
    minWidth: '200px',
    paddingBottom: 40,
  },
});

const Pricing = ({ classes }) => (
  <Grid container justify="center" direction="row" spacing={0} className={classes.row}>
    <Grid item xs={12} className={classes.col} >


      <Typography className={classes.font} variant="display1" gutterBottom color="secondary" >
        { 'Pricing' }

      </Typography>

      <Grid container direction="column" alignItems="center" className={classes.benefitRoot} spacing={0}>

        <Grid container justify="center" direction="row" spacing={0} className={classes.row}>
          <Paper className={classes.paper}>
            <Grid item xs={9} sm={2} md={2} className={classes.col} >
              <Grid container direction="column" alignItems="center" >


                {/* <img src={Heart} alt="Heart Icon" className={classes.heart} /> */}
                <Typography variant="headline" className={classes.font} gutterBottom >
              Team
                </Typography>
                <Typography variant="headline" color="primary" className={classes.font} gutterBottom >
              $20
                </Typography>
                <Typography variant="caption" className={classes.caption} >
              per user per month billed annually
                </Typography>
                <Button
                  color="secondary"
                  style={{ margin: 16 }}
                  onClick={() => { window.location.href = `${window.location.href}app/signup`; }}
                >  Sign Up
                </Button>

                <Typography variant="body2" color="textSecondary" >
                  <ul className={classes.list}>
                    <li className={classes.listItem}>

Personal profiles

                    </li>

                    <li className={classes.listItem}>
Training Resources

                    </li>
                    <li className={classes.listItem}>
Realtime Feedback

                    </li>
                    <li className={classes.listItem}>
Basic Decision Maps

                    </li>
                  </ul>

                </Typography>


              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid item xs={9} sm={2} md={2} className={classes.col} >
              <Grid container direction="column" alignItems="center">
                {/* <img src={Team} alt="Team Icon" className={classes.svg} /> */}

                <Typography variant="headline" className={classes.font} gutterBottom >
      Facilitator
                </Typography>
                <Typography variant="display1" color="primary" className={classes.font} >
              $37
                </Typography>
                <Typography variant="caption" className={classes.caption} >
              per month per user billed annually
                </Typography>
                <Button
                  color="secondary"
                  variant="raised"
                  style={{ margin: 16 }}
                  onClick={() => { window.location.href = `${window.location.href}app/signup`; }}
                >  Sign Up
                </Button>
                <Typography variant="body2" color="textSecondary" >

                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                  All team features

                    </li>
                    <li className={classes.listItem}>
                  Idea management

                    </li>
                    <li className={classes.listItem}>
                   Team profiles

                    </li>
                    <li className={classes.listItem}>
                  Meeting templates

                    </li>
                    <li className={classes.listItem}>
                  Team building

                    </li>
                    <li className={classes.listItem}>
Feedback analysis

                    </li>
                    <li className={classes.listItem}>
                Decision process

                    </li>

                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.paper}>
            <Grid item xs={9} sm={2} md={2} className={classes.col} >
              <Grid container direction="column" justify="center" alignItems="center">
                {/* <img src={Scrum} alt="Organisation" className={classes.svg} /> */}
                <Typography variant="headline" className={classes.font} gutterBottom >
      Enterprise
                </Typography>
                <Typography variant="headline" color="primary" className={classes.font} gutterBottom>
              N/A
                </Typography>

                <Typography variant="caption" className={classes.caption} >
              to arrange demo and discuss customization
                </Typography>
                <Button
                  color="secondary"
                  style={{ margin: 16 }}
                  onClick={() => { window.location.href = `${window.location.href}app/signup`; }}
                >Contact Us
                </Button>
                <Typography variant="body2" color="textSecondary" >

                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                  Custom Integrations

                    </li>
                    <li className={classes.listItem}>
                  Security Integration

                    </li>
                    <li className={classes.listItem}>
                   Dedicated trainers

                    </li>


                  </ul>
                </Typography>

              </Grid>
            </Grid>
          </Paper>
        </Grid>


        <p />

      </Grid>

    </Grid>
  </Grid>
);

export default withStyles(styles)(Pricing);
