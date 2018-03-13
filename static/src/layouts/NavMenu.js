import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import Link from 'gatsby-link';
import IconButton from 'material-ui/IconButton';


const styles = () => ({
  appLink: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
    color: 'darkslategrey',
  },
});

class NavMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes} = this.props;

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}> 
            <Link to="/features/" className={classes.appLink} > Features </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}> 
            <Link to="/pricing/" className={classes.appLink} > Pricing </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}> 
            <Link to="/company/" className={classes.appLink} >Company </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}> 
            <a href="https://zendallo.com/app/signin" className={classes.appLink} >Sign In </a>
          </MenuItem>
          
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(NavMenu);