import React from 'react';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import LogoSvg from './LogoSvg';


const styles = theme => ({
  button: {
  },
  row: {
    display: 'flex',
    padding: '10px 0 0 14px',
    flexDirection: 'row',

  },
  logoText: {
    fontFamily: 'Share Tech',
    fontSize: '27px',
    margin: '5px 5px 5px 10px',
    color: theme.palette.grey[400],

  },
  avatar: {
    // backgroundColor: theme.palette.common.darkWhite,
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
  },
});

const LogoButton = withRouter(({ classes }) => (
  <div>
    {/* <a href="https://initiat.io/" className={classes.link} > */}
    <div className={classes.row} >
      <Avatar className={classes.avatar} >
        <LogoSvg />
      </Avatar>
      <div className={classes.logoText} >
       INITIAT.IO
      </div>
    </div>

    {/* </a> */}
  </div>
));

export default withStyles(styles)(LogoButton);
