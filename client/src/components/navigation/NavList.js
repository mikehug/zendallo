import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withRouter } from 'react-router';
// import Collapse from 'material-ui/transitions/Collapse';
import deepOrange from 'material-ui/colors/deepOrange';
import purple from 'material-ui/colors/purple';
import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import lightGreen from 'material-ui/colors/lightGreen';
import blue from 'material-ui/colors/blue';
import Avatar from 'material-ui/Avatar';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import PlaylistPlayIcon from 'material-ui-icons/PlaylistPlay';
import Person from 'material-ui-icons/Person';
import GroupIcon from 'material-ui-icons/Group';
import Dashboard from 'material-ui-icons/Dashboard';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import MyLocation from 'material-ui-icons/MyLocation';
// import ExpandLess from 'material-ui-icons/ExpandLess';
// import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    textDecoration: 'none',
    maxWidth: 360,
  },
  icon: {
    margin: '0 0 0 5px',
    padding: 1,
    backgroundColor: 'transparent',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NavList extends React.Component {
  state = {
    open: false,
  };

  handleExpand = () => {
    this.setState({ open: !this.state.open });
  };

  handleClick = (path) => {
    this.props.handleDrawerToggle();
    this.props.history.push(path);
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        {/* <ListItem button className={classes.nested}>
          <ListItemIcon className={classes.icon}>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset primary="Intro" />
        </ListItem> */}

        <ListItem button onClick={() => this.handleClick('/profile')}>
          <ListItemIcon className={classes.icon} style={{ color: teal[500] }}>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button onClick={() => this.handleClick('/teams')}>
          <ListItemIcon className={classes.icon} style={{ color: blue[500] }}>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Teams" />
        </ListItem>

        <ListItem button onClick={() => this.handleClick('/sessions')}>
          <ListItemIcon
            className={classes.icon}
            style={{ color: lightGreen[500] }}
          >
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Sessions" />
        </ListItem>

        <ListItem button onClick={() => this.handleClick('/ideas')}>
          <ListItemIcon className={classes.icon} style={{ color: purple[500] }}>
            <LightbulbOutline />
          </ListItemIcon>
          <ListItemText primary="Ideas" />
        </ListItem>

        <ListItem button onClick={() => this.handleClick('/challenges')}>
          <ListItemIcon
            className={classes.icon}
            style={{ color: deepOrange[400] }}
          >
            <MyLocation />
          </ListItemIcon>
          <ListItemText primary="Challenges" />
        </ListItem>

        <ListItem button onClick={() => this.handleClick('/resources')}>
          <ListItemIcon className={classes.icon} style={{ color: pink[500] }}>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
          {/* {this.state.open ? <ExpandLess color="action" /> : <ExpandMore color="action" />} */}
        </ListItem>
        {/* <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon className={classes.icon} >
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText primary="Getting Started" />
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
