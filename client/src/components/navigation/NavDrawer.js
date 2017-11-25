import React from 'react';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import classnames from 'classnames';
import LogoButton from './LogoButton';
import NavList from './NavList';

const drawerWidth = 240;

const styles = theme => ({
  drawerHeader: theme.mixins.toolbar,
  headerStyle: {
    background: 'linear-gradient(55.93deg, rgb(62, 190, 239)  0%, rgb(37, 149, 241) 100%)',
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
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
    <Hidden mdUp>
      <Drawer
        type="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        classes={{ paper: classes.drawerPaper }}
        onRequestClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerContent user={user} handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Hidden>

    <Hidden mdDown implementation="css">
      <Drawer
        type="permanent"
        open
        classes={{ paper: classes.drawerPaper }}
      >
        <DrawerContent user={user} handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Hidden>
  </div>
);

export default withStyles(styles, { withTheme: true })(NavDrawer);
