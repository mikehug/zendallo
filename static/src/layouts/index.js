import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import purple from 'material-ui/colors/purple';
import pink from 'material-ui/colors/pink';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import Link from 'gatsby-link';
import theme from '../themes/default';
import LogoSvg from './LogoSvg';

require('typeface-roboto');
require('typeface-share-tech');

const styles = () => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
  root: {
    width: '100%',
  },
  header: theme.mixins.toolbar,
  headerStyle: {
    background: 'linear-gradient(rgb(241, 35, 27), rgb(230, 139, 11))',
  },
  logoText: {
    fontFamily: 'Share Tech',
    fontSize: '27px',
    fontWeight: 500,
    paddingTop: 2,
    paddingLeft: 2,
    color: pink[400],

  },
  appBar: {
    backgroundColor: 'transparent',
  },
  content: {
    marginTop: theme.spacing.unit * 6,
    '@media (min-width:0px) and (orientation: landscape)': {
      marginTop: theme.spacing.unit * 5,
    },
    '@media (min-width:600px)': {
      marginTop: theme.spacing.unit * 7,
    },
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
  },
  menuLink: {
    paddingLeft: 30,
  },
  appbarSpace: {
    flex: '1',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    fontFamily: 'Share Tech',
    background: 'lightGrey',
    textAlign: 'center',
    paddingTop: '90px',
    width: '100%',
    height: '200px',
  },
});


const Header = withStyles(styles)(({ classes }) => (
  <AppBar color="default" position="static" elevation={0} >
    <Toolbar >
      <Link to="/" className={classes.link} >
        <div className={classes.logo}>
          <LogoSvg />
          <div className={classes.logoText} >
        INITIAT.IO
          </div>
        </div>
      </Link>
      <div className={classes.appbarSpace} />
      {/* <Link to="/company" className={classes.link} >
        <Typography type="subheading" color="accent" className={classes.menuLink} >
      Product
        </Typography>
      </Link>
      <Link to="/company" className={classes.link} >
        <Typography type="subheading" color="accent" className={classes.menuLink} >
      Pricing
        </Typography>
      </Link>
      <Link to="/company" className={classes.link} >
        <Typography type="subheading" color="accent" className={classes.menuLink} >
      Company
        </Typography>
      </Link> */}
      <Link to="https://initiat.io/app/signin" className={classes.link} >
        <Typography type="subheading" color="primary" className={classes.menuLink}>
      Sign In
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
));

const TemplateWrapper = ({ children, classes }) => (
  <MuiThemeProvider theme={theme}>
    <Grid container className={classes.root} direction="column" spacing={0} >
      <Helmet
        title="Initiatio Home"
        meta={[
          { name: 'description', content: 'Visual collaboration for effective teams' },
          { name: 'keywords', content: 'teamwork, social collaboration' },
        ]}
      />
      <Header />
      {/* <Grid container justifyContent="center" spacing={0} direction="column" > */}
      {children()}
      {/* </Grid> */}
      <Grid container justify="center" className={classes.footer} spacing={0} >
        <Typography gutterBottom >
          {`
          Made for you with love 
        `} &hearts;
      <Typography type="caption" gutterBottom align="center">
        Initiatio 2017 &copy;
      </Typography>
        </Typography>
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default withStyles(styles)(TemplateWrapper);
