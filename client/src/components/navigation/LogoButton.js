import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import LogoSvg from './LogoSvg';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoText: {
    fontFamily: 'Share Tech',
    fontSize: '25px',
    padding: '3px',
    marginTop: 5,
    color: theme.palette.text.secondary,

  },
});

const LogoButton = ({ classes, onClick }) => (
  <Button onClick={() => onClick()} color="contrast">
    <div className={classes.row} >
      <LogoSvg />
      <div className={classes.logoText} >
        INITIAT.IO
      </div>
    </div>
  </Button>
);

LogoButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(LogoButton);
