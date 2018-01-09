import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green';
import amber from 'material-ui/colors/amber';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import RemoveRedEyeIcon from 'material-ui-icons/RemoveRedEye';
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import ListIcon from 'material-ui-icons/List';
import BlockIcon from 'material-ui-icons/Block';
import CenterFocusStrongIcon from 'material-ui-icons/CenterFocusStrong';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import CheckIcon from 'material-ui-icons/Check';
import FreeBreakfastIcon from 'material-ui-icons/FreeBreakfast';

const styles = theme => ({
  icon: {
    paddingRight: 5,
    // background: theme.palette.background.paper,
  },
  dialog: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 120,
      marginTop: -30,
    },
  },
  list: {
    width: '100%',
    marginTop: 10,
    maxWidth: 360,
    background: theme.palette.background.paper,
    textAlign: 'left',
  },
});

const DialogContent = (props) => {
  switch (props.type) {
    case 'Suggest':
      return <SuggestOptions handleSelection={props.handleSelection} />;
    case 'Express':
      return <ExpressOptions handleSelection={props.handleSelection} />;
    default:
      return {};
  }
};

const ExpressOptions = props => (
  <List >
    <ListItem button>
      <Avatar>
        <span style={{ fontSize: 40, paddingTop: 7 }} role="img" aria-label="excited" >🤩</span>
      </Avatar>
      <ListItemText primary="Excited" secondary="Middle of the road" />
    </ListItem>
    <ListItem button >
      <Avatar>
        <span style={{ fontSize: 40, paddingTop: 7 }} role="img" aria-label="happy" >😀</span>
      </Avatar>
      <ListItemText primary="Happy" secondary="Feeling groovy" />
    </ListItem>
    <ListItem button>
      <Avatar>
        <span style={{ fontSize: 40, paddingTop: 7 }} role="img" aria-label="Hmmm">🤔</span>
      </Avatar>
      <ListItemText primary="Thinking" secondary="Need time to think" />
    </ListItem>
    <ListItem button>
      <Avatar>
        <span style={{ fontSize: 40, paddingTop: 7 }} role="img" aria-label="confused" >😕</span>
      </Avatar>
      <ListItemText primary="Confused" secondary="Not really following" />
    </ListItem>
    <ListItem button >
      <Avatar>
        <span style={{ fontSize: 40, paddingTop: 7 }} role="img" aria-label="unsatisfied">😟</span>
      </Avatar>
      <ListItemText primary="Worried" secondary="Unsure and concerned " />
    </ListItem>
    <ListItem button >
      <Avatar>
        <span style={{ fontSize: 40, paddingTop: 7 }} role="img" aria-label="unhappy" >😣</span>
      </Avatar>
      <ListItemText primary="Frustrated" secondary="Really dissatisfied " />
    </ListItem>
    <ListItem button>
      <Avatar>
        <span style={{ fontSize: 40, paddingTop: 7 }}role="img" aria-label="angry" >😡</span>
      </Avatar>
      <ListItemText primary="Angry" secondary="Losing the cool" />
    </ListItem>
  </List>
);

const SuggestOptions = props => (
  <List >
    <ListItem button >
      <Avatar>
        <CenterFocusStrongIcon style={{ color: blue[500] }} />
      </Avatar>
      <ListItemText primary="Focus on agenda" secondary="Going off topic" />
    </ListItem>
    <ListItem button>
      <Avatar>
        <FreeBreakfastIcon style={{ color: amber[500] }} />
      </Avatar>
      <ListItemText primary="Break" secondary="Request bio break" />
    </ListItem>
    <ListItem button>
      <Avatar>
        <CheckIcon style={{ color: green[500] }} />
      </Avatar>
      <ListItemText primary="Agree" secondary="Agree with the proposal" />
    </ListItem>
    <ListItem button >
      <Avatar>
        <ArrowForwardIcon style={{ color: blue[500] }} />
      </Avatar>
      <ListItemText primary="Move On" secondary="Topic is covered sufficently" />
    </ListItem>
    <ListItem button >
      <Avatar>
        <ArrowBackIcon style={{ color: amber[500] }} />
      </Avatar>
      <ListItemText primary="Go back" secondary="We missed something" />
    </ListItem>
    <ListItem button>
      <Avatar>
        <BlockIcon style={{ color: red[500] }} />
      </Avatar>
      <ListItemText primary="Stop" secondary="Hold it right there" />
    </ListItem>
  </List>
);


class Participate extends Component { // eslint-disable-line
  state= {
    open: false,
    actionType: 'Suggest',
  }

  handleDialogOpen = (action) => {
    this.setState({ open: true, actionType: action.type });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  handleSelection = (selection) => {

  }

  render() {
    const { classes } = this.props;
    return (
      <Grid >
        <Button color="default" aria-label="suggest" onClick={() => this.handleDialogOpen({ type: 'Suggest' })} >
          <LightbulbOutlineIcon className={classes.icon} />
          Suggest
        </Button>
        <Button color="default" aria-label="express" onClick={() => this.handleDialogOpen({ type: 'Express' })} >
          <FavoriteBorderIcon className={classes.icon} />
          Express
        </Button>
        {/* <Button color="default" aria-label="feedback" >
          <RemoveRedEyeIcon className={classes.icon} />
          Feedback
        </Button> */}

        <Dialog
          open={this.state.open}
          onClose={this.handleDialogClose}
          className={classes.dialog}
        >

          <DialogContent type={this.state.actionType} />

        </Dialog>


        <List className={classes.list} >
          <ListItem button>
            <Avatar>
              <FreeBreakfastIcon style={{ color: amber[500] }} />
            </Avatar>
            <ListItemText primary="Take a break" secondary="Dec 11, 2017" />
          </ListItem>
          <ListItem button>
            <Avatar>
              <CenterFocusStrongIcon style={{ color: blue[500] }} />
            </Avatar>
            <ListItemText primary="Focus on agenda" secondary="Dec 11, 2017" />
          </ListItem>
          <ListItem button>
            <Avatar>
              <ListIcon />
            </Avatar>
            <ListItemText primary="Session initiatized" secondary="Dec 11, 2017" />
          </ListItem>

        </List>
      </Grid>

    );
  }
}

export default withStyles(styles)(Participate);
