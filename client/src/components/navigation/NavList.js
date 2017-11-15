
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withRouter } from 'react-router';
import Collapse from 'material-ui/transitions/Collapse';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import PlaylistPlayIcon from 'material-ui-icons/PlaylistPlay';
import Dashboard from 'material-ui-icons/Dashboard';
import GroupIcon from 'material-ui-icons/Group';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    textDecoration: 'none',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NavList extends React.Component {
  handleClick = (path) => {
    this.props.handleDrawerToggle();
    this.props.history.push(path);
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root} >
        {/* <ListItem button onClick={() => history.push('/')} >
          <ListItemIcon >
            <Dashboard />
          </ListItemIcon>
          <ListItemText inset primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => history.push('/team')} >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText inset primary="Team" />
        </ListItem> */}
        <ListItem button onClick={() => this.handleClick('/session')} >
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText inset primary="Session" />
        </ListItem>
        {/* <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText inset primary="Resources" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Intro" />
          </ListItem>
        </Collapse> */}
      </List>
    );
  }
}

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(NavList));
