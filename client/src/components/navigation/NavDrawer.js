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
    background: 'linear-gradient(rgb(241, 35, 27), rgb(230, 139, 11))',
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
    <NavList />
  </div>
));

const NavDrawer = ({
  theme, classes, mobileOpen, handleDrawerToggle,
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
        <DrawerContent />
      </Drawer>
    </Hidden>
    <Hidden mdDown implementation="css">
      <Drawer
        type="permanent"
        open
        classes={{ paper: classes.drawerPaper }}
      >
        <DrawerContent />
      </Drawer>
    </Hidden>
  </div>
);

export default withStyles(styles, { withTheme: true })(NavDrawer);