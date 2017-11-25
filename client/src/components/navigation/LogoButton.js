import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import LogoSvg from './LogoSvg';
import pink from 'material-ui/colors/pink';


const styles = theme => ({
  button: {
  },
  row: {
    display: 'flex',
    padding: '14px 0 0 14px',
    flexDirection: 'row',

  },
  logoText: {
    fontFamily: 'Share Tech',
    fontSize: '27px',
    margin: '2px 5px 5px 4px',
    color: theme.palette.common.darkWhite,

  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
  },
});

const LogoButton = withRouter(({ classes, history }) => (
  <div>
    <a href="https://initiat.io/" className={classes.link} >
      <div className={classes.row} >
        <LogoSvg />
        <div className={classes.logoText} >
       INITIAT.IO
        </div>
      </div>

    </a>
  </div>
));

export default withStyles(styles)(LogoButton);
