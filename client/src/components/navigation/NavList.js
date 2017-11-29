
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withRouter } from 'react-router';
// import Collapse from 'material-ui/transitions/Collapse';
import orange from 'material-ui/colors/orange';
import pink from 'material-ui/colors/pink';
import lightGreen from 'material-ui/colors/lightGreen';
import lightBlue from 'material-ui/colors/lightBlue';
import Avatar from 'material-ui/Avatar';


import GroupWorkIcon from 'material-ui-icons/GroupWork';
import PlaylistPlayIcon from 'material-ui-icons/PlaylistPlay';
import Person from 'material-ui-icons/Person';
import GroupIcon from 'material-ui-icons/Group';
import Dashboard from 'material-ui-icons/Dashboard';
// import ExpandLess from 'material-ui-icons/ExpandLess';
// import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    textDecoration: 'none',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  icon: {
    margin: '0 2px 0 2px',
    padding: 4,

  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NavList extends React.Component {
  state = {
    open: false,
  }

  handleExpand = () => {
    this.setState({ open: !this.state.open });
  }

  handleClick = (path) => {
    this.props.handleDrawerToggle();
    this.props.history.push(path);
  };

  render() {
    const { classes, history } = this.props;

    return (
      <List className={classes.root} >
        <ListItem button onClick={() => history.push('/dashboard')} >
          <ListItemIcon >
            <Avatar className={classes.icon} >
              <Dashboard />
            </Avatar>
          </ListItemIcon>
          <ListItemText inset primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => this.handleClick('/session')} >
          <ListItemIcon className={classes.icon} style={{ color: lightGreen[500] }} >
            <Avatar >
              <GroupWorkIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText inset primary="Session" />
        </ListItem>
        {/* <ListItem button className={classes.nested}>
          <ListItemIcon className={classes.icon}>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset primary="Intro" />
        </ListItem> */}

        <ListItem button onClick={() => history.push('/team')} >
          <ListItemIcon className={classes.icon} style={{ color: lightBlue[500] }} >
            <Avatar >
              <GroupIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText inset primary="Team" />
        </ListItem>
        <ListItem button onClick={() => history.push('/profile')} >
          <ListItemIcon className={classes.icon} style={{ color: orange[500] }} >
            <Avatar >
              <Person />
            </Avatar>
          </ListItemIcon>
          <ListItemText inset primary="Profile" />
        </ListItem>
        <ListItem button onClick={this.handleExpand}>
          <ListItemIcon className={classes.icon} style={{ color: pink[500] }} >
            <Avatar >
              <PlaylistPlayIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText inset primary="Resources" />
        </ListItem>
        {/* <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon className={classes.icon}>
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
