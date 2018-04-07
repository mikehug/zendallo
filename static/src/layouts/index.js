import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import pink from 'material-ui/colors/pink';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import Link from 'gatsby-link';
import NavMenu from './NavMenu';
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
    fontSize: '30px',
    fontWeight: 800,
    paddingLeft: 2,
    paddingBottom: 3,
    color: theme.palette.grey[700],

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
  appLink: {
    paddingLeft: 250,
    textDecoration: 'none',
    fontFamily: 'Roboto',
    color: 'darkslategrey',
  },
  pageMenu: {
    display: 'flex',
    flexGrow: '1',
    marginRight: 90,

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
    paddingTop: '40px',
    width: '100%',
    height: '100px',
  },
});


const Header = withStyles(styles)(({ classes }) => (
  <AppBar color="default" position="static" elevation={0} >
    <Toolbar >
      <Link to="/" className={classes.link} >
        <div className={classes.logo}>
          <LogoSvg />
          <div className={classes.logoText} >
            Zendallo
          </div>
        </div>
      </Link>
      <div className={classes.appbarSpace} />
      {/* <Link to="/company" className={classes.link} >
        <Typography variant="subheading" color="accent" className={classes.menuLink} >
      Product
        </Typography>
      </Link>
      <Link to="/company" className={classes.link} >
        <Typography variant="subheading" color="accent" className={classes.menuLink} >
      Pricing
        </Typography>
      </Link>
      <Link to="/company" className={classes.link} >
        <Typography variant="subheading" color="accent" className={classes.menuLink} >
      Company
        </Typography>
      </Link> */}

      <Hidden smDown >

        <div className={classes.pageMenu} >
          <Link to="/features/" className={classes.link} >
            <Typography variant="subheading" color="secondary" className={classes.menuLink}>
      Features
            </Typography>
          </Link>

          <Link to="/pricing/" className={classes.link} >
            <Typography variant="subheading" color="secondary" className={classes.menuLink}>
      Pricing
            </Typography>

          </Link>

          {/* <Link to="/blog/" className={classes.link} >
          <Typography variant="subheading" color="secondary" className={classes.menuLink}>
      Blog
          </Typography>
        </Link> */}

          <Link to="/company/" className={classes.link} >
            <Typography variant="subheading" color="secondary" className={classes.menuLink}>
      Company
            </Typography>
          </Link>
        </div>

      </Hidden>
      <Hidden smDown>
        <a href={typeof window !== 'undefined' ? `http://${window.location.host}/app/signin/` : '#'} className={classes.link} >
          <Typography variant="subheading" className={classes.menuLink}>
      Sign In
          </Typography>
        </a>
      </Hidden>

      <Hidden mdUp>
        <NavMenu />
      </Hidden>

    </Toolbar>
  </AppBar>
));

const TemplateWrapper = ({ children, classes }) => (
  <MuiThemeProvider theme={theme}>
    <Grid container className={classes.root} direction="column" spacing={0} >
      <Helmet>
        <title>Zendallo</title>
        <meta name="description" content="Visual collaboration for effective teams" />
        <meta name="keywords" content="teamwork, social collaboration" />
        <script type="text/javascript" >{`
        if(typeof window !== 'undefined') {
          window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
      heap.load("3825646806");
        }
        `}
        </script>
        <script src="https://js.stripe.com/v3/" />
      </Helmet>

      <Header />
      {/* <Grid container justifyContent="center" spacing={0} direction="column" > */}
      {children()}
      {/* </Grid> */}
      <Grid container justify="center" className={classes.footer} spacing={0} >
        <Typography gutterBottom >
          {`
          Made for you with love 
        `} &hearts;
          <Typography variant="caption" gutterBottom align="center">
        Zendallo 2018 &copy;
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
