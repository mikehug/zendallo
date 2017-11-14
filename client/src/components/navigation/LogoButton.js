import React from 'react';
import { withRouter } from 'react-router';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import LogoSvg from './LogoSvg';

const styles = theme => ({
  button: {
    margin: '5px 0 0 0',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  logoText: {
    fontFamily: 'Share Tech',
    fontSize: '28px',
    margin: '8px 5px 5px 10px',
    color: theme.palette.text.secondary,

  },
});

const LogoButton = withRouter(({ classes, history }) => (
  <Button onClick={() => history.push('/app')} color="contrast" className={classes.button}>
    <div className={classes.row} >
      <LogoSvg />
      <div className={classes.logoText} >
        initiat.io
      </div>
    </div>
  </Button>
));

export default withStyles(styles)(LogoButton);
