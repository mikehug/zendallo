import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green';
import amber from 'material-ui/colors/amber';
import blue from 'material-ui/colors/blue';
import orange from 'material-ui/colors/orange';
import purple from 'material-ui/colors/purple';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import RemoveRedEyeIcon from 'material-ui-icons/RemoveRedEye';
import TextField from 'material-ui/TextField';
import AssignmentLateIcon from 'material-ui-icons/AssignmentLate';
import ChatIcon from 'material-ui-icons/ChatBubbleOutline';
import FaceIcon from 'material-ui-icons/Face';
import ListIcon from 'material-ui-icons/List';
import BlockIcon from 'material-ui-icons/Block';
import CenterFocusStrongIcon from 'material-ui-icons/CenterFocusStrong';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import CheckIcon from 'material-ui-icons/Check';
import FreeBreakfastIcon from 'material-ui-icons/FreeBreakfast';
import { Paper } from 'material-ui';

const styles = theme => ({
  root: {
    width: 340,
    minHeight: 400,
    paddingBottom: 16,
    margin: 0,
  },
  iconButton: {
    margin: 10,
    // background: theme.palette.background.paper,
  },
  dialog: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 120,
      marginTop: -30,
    },
  },
  dialogContent: {
    marginBottom: 10,
  },
  dialogTitle: {
    paddingBottom: 10,
    paddingTop: 18,
  },
  avartar: {
    backgroundColor: 'transparent',
    textAlign: 'top',
  },
  listText: {
    paddingRight: 15,
    paddingTop: 28,
  },
  list: {
    marginBottom: 40,
    maxWidth: 300,
  },
});

const getAvatar = (key) => {
  switch (key) {
    case 'Excited':
      return <span role="img" aria-label="excited" >🤩</span>;

    case 'Happy':
      return <span role="img" aria-label="happy" >😀</span>;


    case 'Thinking':
      return <span role="img" aria-label="Hmmm">🤔</span>;


    case 'Confused':
      return <span role="img" aria-label="confused" >😕</span>;

    case 'Worried':
      return <span role="img" aria-label="unsatisfied">😟</span>;


    case 'Frustrated':
      return <span role="img" aria-label="unhappy" >😣</span>;


    case 'Angry':
      return <span role="img" aria-label="angry" >😡</span>;

    case 'Focus':
      return <CenterFocusStrongIcon style={{ color: purple[500] }} />;

    case 'Break':
      return <FreeBreakfastIcon style={{ color: orange[500] }} />;

    case 'Agree':
      return <CheckIcon style={{ color: green[500] }} />;

    case 'Move On':
      return <ArrowForwardIcon style={{ color: blue[500] }} />;

    case 'Go Back':
      return <ArrowBackIcon style={{ color: amber[500] }} />;

    case 'Stop':
      return <BlockIcon style={{ color: red[500] }} />;

    case 'Chat':
      return <ChatIcon style={{ color: grey[500] }} />;

    default:
      break;
  }
};


const DialogContent = (props) => {
  switch (props.type) {
    case 'Agenda':
      return <AgendaOptions handleSelection={props.handleSelection} />;
    case 'Share':
      return <ShareOptions handleSelection={props.handleSelection} />;
    case 'Chat':
      return <ChatEntry handleSubmit={props.handleSubmit} handleTextChange={props.handleTextChange} />;
    default:
      return {};
  }
};

const ChatEntry = ({ chatText, handleTextChange, handleSubmit }) => (
  <div style={{ padding: 16 }} >
    <form onSubmit={handleSubmit} >
      <TextField
        autoFocus
        id="message"
        value={chatText}
        onChange={handleTextChange}
      />
      <Button type="submit" >
      Send
      </Button>
    </form>
  </div>
);

const ShareOptions = withStyles(styles)(({ handleSelection, classes }) => (
  <List dense >
    <ListItem button onClick={() => handleSelection({ type: 'Excited' })}>
      <Avatar className={classes.avartar} >
        {getAvatar('Excited')}
      </Avatar>
      <ListItemText primary="Excited" secondary="Middle of the road" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Happy' })} >
      <Avatar className={classes.avartar}>
        {getAvatar('Happy')}

      </Avatar>
      <ListItemText primary="Happy" secondary="Feeling groovy" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Thinking' })}>
      <Avatar className={classes.avartar}>
        {getAvatar('Thinking')}

      </Avatar>
      <ListItemText primary="Thinking" secondary="Need time to think" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Confused' })}>
      <Avatar className={classes.avartar}>
        {getAvatar('Confused')}

      </Avatar>
      <ListItemText primary="Confused" secondary="Not really following" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Worried' })} >
      <Avatar className={classes.avartar}>
        {getAvatar('Worried')}

      </Avatar>
      <ListItemText primary="Worried" secondary="Unsure and concerned " />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Frustrated' })} >
      <Avatar className={classes.avartar}>
        {getAvatar('Frustrated')}

      </Avatar>
      <ListItemText primary="Frustrated" secondary="Really dissatisfied " />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Angry' })}>
      <Avatar className={classes.avartar}>
        {getAvatar('Angry')}

      </Avatar>
      <ListItemText primary="Angry" secondary="Losing the cool" />
    </ListItem>
  </List>
));

const AgendaOptions = withStyles(styles)(({ classes, handleSelection }) => (
  <List dense >
    <ListItem button onClick={() => handleSelection({ type: 'Break' })}>
      <Avatar className={classes.avartar} >
        {getAvatar('Break')}

      </Avatar>
      <ListItemText primary="Break" secondary="Request bio break" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Agree' })}>
      <Avatar className={classes.avartar} >
        {getAvatar('Agree')}

      </Avatar>
      <ListItemText primary="Agree" secondary="Agree with the proposal" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Move On' })} >
      <Avatar className={classes.avartar} >
        {getAvatar('Move On')}

      </Avatar>
      <ListItemText primary="Move On" secondary="Topic is covered sufficently" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Go Back' })} >
      <Avatar className={classes.avartar} >
        {getAvatar('Go Back')}

      </Avatar>
      <ListItemText primary="Go back" secondary="We missed something" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Stop' })}>
      <Avatar className={classes.avartar} >
        {getAvatar('Stop')}

      </Avatar>
      <ListItemText primary="Stop" secondary="Hold it right there" />
    </ListItem>
  </List>
));


class Participate extends Component { // eslint-disable-line
  state= {
    open: false,
    actionType: 'Agenda',
    chatText: 'text',
  }

  handleDialogOpen = (action) => {
    this.setState({ open: true, actionType: action.type });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  handleTextChange = (event) => {
    this.setState({ chatText: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.chatText.length > 0) {
      this.props.handleFeedback({ type: 'Chat', text: this.state.chatText });
      this.setState({ open: false, chatText: '' });
    }
  }

  handleSelection = (selection) => {
    this.props.handleFeedback(selection);
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid >
        <Paper className={classes.root} >
          <IconButton className={classes.iconButton} color="secondary" aria-label="Agenda" onClick={() => this.handleDialogOpen({ type: 'Agenda' })} >
            <AssignmentLateIcon />
          </IconButton>
          <IconButton className={classes.iconButton} color="secondary" aria-label="Share" onClick={() => this.handleDialogOpen({ type: 'Share' })} >
            <FaceIcon />
          </IconButton>

          <IconButton className={classes.iconButton} color="secondary" aria-label="Chat" onClick={() => this.handleDialogOpen({ type: 'Chat' })} >
            <ChatIcon />
          </IconButton>
          {/* <Button color="default" aria-label="feedback" >
          <RemoveRedEyeIcon className={classes.icon} />
          Feedback
        </Button> */}
          <Dialog
            open={this.state.open}
            onClose={this.handleDialogClose}
            className={classes.dialog}
          >
            <DialogTitle className={classes.dialogTitle} >{this.state.actionType}</DialogTitle>
            <div className={classes.dialogContent}>
              <DialogContent
                type={this.state.actionType}
                handleSelection={this.handleSelection}
                handleTextChange={this.handleTextChange}
                chatText={this.state.chatText}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </Dialog>

          <Paper className={classes.list}>
            <List dense >
              <ListItem >


                <ListItemText
                  style={{ textAlign: 'center' }}
                  primary="Select icon above to participate"
                />

              </ListItem>
              <Divider />


              {this.props.session.activity.slice(0).reverse().map(activity => (
                <div key={activity.dateTime}>
                  <ListItem >
                    <Avatar className={classes.avartar} >
                      {getAvatar(activity.type)}
                    </Avatar>
                    <ListItemText
                      primary={(activity.type === 'Chat') ? activity.text : activity.type}
                      secondary={`${this.props.session.attendees.find(attendee => attendee.userId === activity.userId).name} ${moment(activity.dateTime).fromNow()}`}
                    />

                  </ListItem>
                  <Divider />
                </div>
          ))}


            </List>
          </Paper>
        </Paper>
      </Grid>

    );
  }
}

export default withStyles(styles)(Participate);
