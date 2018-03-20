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

const ContactPage = ({ classes }) => (
  <Grid container justify="center" justifyContent="center" direction="row" spacing={0} className={classes.row}>
    <Grid item xs={10} sm={8} md={7} lg={6} className={classes.col} >

      <Typography className={classes.font} variant="display1" gutterBottom color="secondary" style={{ paddingTop: 20, paddingBottom: 20 }} >
        { 'Contact Us' }

      </Typography>
      <Paper className={classes.paper}>

        
      </Paper>

    </Grid>

  </Grid>
);

export default withStyles(styles)(ContactPage);
