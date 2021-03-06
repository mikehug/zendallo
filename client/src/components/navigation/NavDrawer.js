import React from 'react';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import LogoButton from './LogoButton';
import NavList from './NavList';

const drawerWidth = 240;

const styles = theme => ({
  drawerHeader: theme.mixins.toolbar,
  headerStyle: {
    backgroundColor: theme.palette.backgroundColor,
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      position: 'fixed',
    },
  },
});

const DrawerContent = withStyles(styles)(props => (
  <div>
    <div className={classnames(props.classes.drawerHeader, props.classes.headerStyle)} >
      <LogoButton />

    </div>
    <Divider />
    { props.user ?
      <NavList handleDrawerToggle={props.handleDrawerToggle} /> :
      null}
  </div>
));

const NavDrawer = ({
  theme, classes, mobileOpen, handleDrawerToggle, user,
}) => (
  <div>
    <Hidden lgUp>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        classes={{ paper: classes.drawerPaper }}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerContent user={user} handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Hidden>

    <Hidden mdDown implementation="css">
      <Drawer
        variant="permanent"
        open
        classes={{ paper: classes.drawerPaper }}
      >
        <DrawerContent user={user} handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Hidden>
  </div>
);

export default withStyles(styles, { withTheme: true })(NavDrawer);
