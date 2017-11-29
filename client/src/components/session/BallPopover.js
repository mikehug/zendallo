
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
// import Grow from 'material-ui/transitions/Grow';
// import Paper from 'material-ui/Paper';
// import { Manager, Target, Popper } from 'react-popper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class BallPopover extends Component {
  state = {
    anchorEl: null,
    // popperOpen: false,
  };

  handlePopoverOpen = (event) => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  // handlePopperOpen = () => {
  //   this.setState({ popperOpen: true });
  // };

  // handlePopperClose = () => {
  //   this.setState({ popperOpen: false });
  // };

  render() {
    const { classes, children, name } = this.props;
    // const { anchorEl, popperOpen } = this.state;
    const { anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <div // eslint-disable-line jsx-a11y/mouse-events-have-key-events
        className="wrapper"
        onMouseOver={this.handlePopoverOpen}
        onMouseDown={this.handlePopoverClose}
        onMouseOut={this.handlePopoverClose}
        onTouchStart={this.handlePopoverOpen}
        onTouchEnd={this.handlePopoverClose}
        role="presentation"
      >
        {children}
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          onRequestClose={this.handlePopoverClose}
        >
          <Typography>{name}</Typography>
        </Popover>
      </div>
    );
  }
}

BallPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BallPopover);
