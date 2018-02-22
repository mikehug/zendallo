import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import LogoSvg from './LogoSvg';


const styles = theme => ({
  button: {
  },
  row: {
    display: 'flex',
    padding: '16px 0 0 14px',
    flexDirection: 'row',

  },
  logoText: {
    fontFamily: 'Share Tech',
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '1px 5px 5px 5px',
    color: theme.palette.grey[700],

  },
  avatar: {
    backgroundColor: 'transparent',
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
  },
});

const LogoButton = withRouter(({ classes }) => (
  <div>
    <Link to="/dashboard" href="/app/dashboard" className={classes.link} >
      <div className={classes.row} >
        <LogoSvg />
        <div className={classes.logoText} >
       Zendallo
        </div>
      </div>

    </Link>
  </div>
));

export default withStyles(styles)(LogoButton);
