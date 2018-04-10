import React, { Component, ReactDOM } from 'react';
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
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import RemoveRedEyeIcon from 'material-ui-icons/RemoveRedEye';
import TextField from 'material-ui/TextField';
import AssignmentLateIcon from 'material-ui-icons/AssignmentLate';
import ChatIcon from 'material-ui-icons/ChatBubbleOutline';
import FaceIcon from 'material-ui-icons/Face';
import ListIcon from 'material-ui-icons/List';
import HandIcon from 'material-ui-icons/PanTool';
import SendIcon from 'material-ui-icons/Send';
import BlockIcon from 'material-ui-icons/Block';
import CenterFocusStrongIcon from 'material-ui-icons/CenterFocusStrong';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import CheckIcon from 'material-ui-icons/Check';
import FreeBreakfastIcon from 'material-ui-icons/FreeBreakfast';
import { Paper } from 'material-ui';
import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';
import Popover from 'material-ui/Popover';
import HappySvg from './emoticons/HappySvg';
import ConfusedSvg from './emoticons/ConfusedSvg';
import ExcitedSvg from './emoticons/ExcitedSvg';
import AngrySvg from './emoticons/AngrySvg';
import NeutralSvg from './emoticons/NeutralSvg';
import SadSvg from './emoticons/SadSvg';
import ThinkingSvg from './emoticons/ThinkingSvg';
import UpsetSvg from './emoticons/UpsetSvg';


const styles = theme => ({
  root: {
    minWidth: 340,
    maxWidth: 420,
    paddingBottom: 16,
    margin: 0,
    height: 360,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  iconButton: {
    color: theme.palette.secondary.main,
    // background: theme.palette.background.paper,
    height: 36,
    width: 36,
    margin: '10px 10px 8px 10px',
    backgroundColor: 'transparent',
  },
  icon: {

  },
  dialog: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 120,
      marginTop: -30,
    },
  },
  dialogContent: {
    marginBottom: 10,
    minWidth: 200,
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
    width: 320,
    minHeight: 40,
    padding: 0,
  },
  chart: {
    padding: '5px 0 5px 0',
  },
});

const getAvatar = (key) => {
  switch (key) {
    case 'Excited':
      return (
        <span role="img" aria-label="excited" >
          <ExcitedSvg />
        </span>
      );

    case 'Happy':
      return (
        <span role="img" aria-label="happy">
          <HappySvg />
        </span>
      );

    case 'Thinking':
      return (
        <span role="img" aria-label="thinking">
          <ThinkingSvg />
        </span>
      );

    case 'Neutral':
      return (
        <span role="img" aria-label="Neutral">
          <NeutralSvg />
        </span>
      );

    case 'Confused':
      return (
        <span role="img" aria-label="confused">
          <ConfusedSvg />
        </span>
      );

    case 'Worried':
      return (
        <span role="img" aria-label="worried">
          <SadSvg />
        </span>
      );

    case 'Unhappy':
      return (
        <span role="img" aria-label="unhappy">
          <UpsetSvg />
        </span>
      );

    // case 'Angry':
    //   return (
    //     <span role="img" aria-label="angry">
    //       <AngrySvg />
    //     </span>
      // );

    case 'Focus':
      return <CenterFocusStrongIcon style={{ color: purple[500] }} />;

    case 'Raise Hand':
      return <HandIcon style={{ color: amber[500] }} />;

    case 'Break':
      return <FreeBreakfastIcon style={{ color: orange[500] }} />;

    case 'Agree':
      return <CheckIcon style={{ color: green[500] }} />;

    case 'Move On':
      return <ArrowForwardIcon style={{ color: blue[500] }} />;

    case 'Slow Down':
      return <ArrowBackIcon style={{ color: orange[500] }} />;

    case 'Disagree':
      return <BlockIcon style={{ color: red[500] }} />;

    case 'Chat':
      return <ChatIcon style={{ color: grey[500] }} />;

    default:
      break;
  }
};

const DialogContent = (props) => {
  switch (props.type) {
    case 'Suggestions':
      return <AgendaOptions handleSelection={props.handleSelection} />;
    case 'Feeling':
      return <ShareOptions handleSelection={props.handleSelection} />;
    case 'Chat':
      return (
        <ChatEntry
          handleSubmit={props.handleSubmit}
          handleTextChange={props.handleTextChange}
        />
      );
    default:
      return {};
  }
};

const ChatEntry = ({ chatText, handleTextChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Grid
      container
      direction="row"
      style={{
            width: '100%', flexWrap: 'nowrap', paddingLeft: 16, paddingTop: 10,
            }}
    >
      <TextField
        autoFocus
        id="message"
        value={chatText}
        onChange={handleTextChange}
      />
      <IconButton type="submit" style={{ paddingBottom: 10 }} ><SendIcon /></IconButton>
    </Grid>
  </form>
);

const ShareOptions = withStyles(styles)(({ handleSelection, classes }) => (
  <List dense>
    {/* <ListItem button onClick={() => handleSelection({ type: 'Excited' })}>
      <Avatar className={classes.avartar} >{getAvatar('Excited')}</Avatar>
      <ListItemText primary="Excited" />
    </ListItem> */}
    <ListItem button onClick={() => handleSelection({ type: 'Happy', value: 2, category: 'share' })}>
      <Avatar className={classes.avartar}>{getAvatar('Happy')}</Avatar>
      <ListItemText primary="Happy" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Thinking', value: 1, category: 'share' })}>
      <Avatar className={classes.avartar}>{getAvatar('Thinking')}</Avatar>
      <ListItemText primary="Thinking" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Neutral', value: 0, category: 'share' })}>
      <Avatar className={classes.avartar}>{getAvatar('Neutral')}</Avatar>
      <ListItemText primary="Neutral" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Confused', value: -1, category: 'share' })}>
      <Avatar className={classes.avartar}>{getAvatar('Confused')}</Avatar>
      <ListItemText primary="Confused" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Worried', value: -2, category: 'share' })}>
      <Avatar className={classes.avartar}>{getAvatar('Worried')}</Avatar>
      <ListItemText primary="Worried" />
    </ListItem>
    {/* <ListItem button onClick={() => handleSelection({ type: 'Unhappy' })}>
      <Avatar className={classes.avartar}>{getAvatar('Unhappy')}</Avatar>
      <ListItemText primary="Unhappy" />
    </ListItem> */}
    {/* <ListItem button onClick={() => handleSelection({ type: 'Angry' })}>
      <Avatar className={classes.avartar}>{getAvatar('Angry')}</Avatar>
      <ListItemText primary="Angry" secondary="Losing the cool" />
    </ListItem> */}
  </List>
));

const AgendaOptions = withStyles(styles)(({ classes, handleSelection }) => (
  <List dense>
    <ListItem button onClick={() => handleSelection({ type: 'Focus', category: 'agenda' })}>
      <Avatar className={classes.avartar}>{getAvatar('Focus')}</Avatar>
      <ListItemText primary="Focus" secondary="We are on a tangent" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Agree', category: 'agenda' })}>
      <Avatar className={classes.avartar}>{getAvatar('Agree')}</Avatar>
      <ListItemText primary="Agree" secondary="Agree with the proposal" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Disagree', value: 0 })}>
      <Avatar className={classes.avartar}>{getAvatar('Disagree')}</Avatar>
      <ListItemText primary="Disagree" secondary="Disagree with the proposal" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Raise Hand', category: 'agenda' })}>
      <Avatar className={classes.avartar}>{getAvatar('Raise Hand')}</Avatar>
      <ListItemText primary="Raise Hand" secondary="I want to speak next" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Slow Down', category: 'agenda' })}>
      <Avatar className={classes.avartar}>{getAvatar('Slow Down')}</Avatar>
      <ListItemText primary="Slow Down" secondary="Slow down, going too fast" />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Move On', category: 'agenda' })}>
      <Avatar className={classes.avartar}>{getAvatar('Move On')}</Avatar>
      <ListItemText
        primary="Move On"
        secondary="Topic is covered sufficently"
      />
    </ListItem>
    <ListItem button onClick={() => handleSelection({ type: 'Break', category: 'agenda' })}>
      <Avatar className={classes.avartar}>{getAvatar('Break')}</Avatar>
      <ListItemText primary="Break" secondary="Request break or need to leave" />
    </ListItem>
  </List>
));


const CustomizedDot = (props) => {
  const { cx, cy, value } = props;

  switch (value) {
    case 2:
      return (
        <HappySvg x={cx - 10} y={cy - 10} />
      );
    case 1:
      return (
        <ThinkingSvg x={cx - 10} y={cy - 10} />
      );
    case 0:
      return (
        <NeutralSvg x={cx - 10} y={cy - 10} />
      );
    case -1:
      return (
        <ConfusedSvg x={cx - 10} y={cy - 10} />
      );
    case -2:
      return (
        <SadSvg x={cx - 10} y={cy - 10} />
      );

    default:
      return null;
  }
};

class Participate extends Component {
  // eslint-disable-line
  state = {
    dialogOpen: false,
    actionType: 'Suggestions',
    chatText: '',
    popoverOpen: false,
  };

  componentDidMount() {
    this.scrollToLeft();
  }

  componentDidUpdate() {
    this.scrollToLeft();
  }

  customiseToolTip = (props) => {
    const { active, payload } = props;

    if (active && payload && payload[0].payload) {
      return (
        <div style={{
          padding: 5, backgroundColor: 'white', direction: 'rtl', zIndex: 100,
          }}
        >
          {/* {getAvatar(payload[0].payload.type)} */}
          <Grid container direction="column" align="bottom" >
            <Typography className="custom-tooltip" >
              {`${payload[0].payload.type} `}
            </Typography>
            <Typography variant="caption" >
              {` ${this.props.session.attendees.find(attendee =>
           attendee.userId === payload[0].payload.userId).name} ${moment(payload[0].payload.dateTime).fromNow()}`}
            </Typography>
          </Grid>
        </div>
      );
    }
    return null;
  };

  handleDialogOpen = (action) => {
    this.setState({ dialogOpen: true, actionType: action.type });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleTextChange = (event) => {
    this.setState({ chatText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.chatText.length > 0) {
      this.props.handleFeedback({ type: 'Chat', text: this.state.chatText, category: 'text' });
      this.setState({ dialogOpen: false, chatText: '' });
    }
  };

  handleSelection = (selection) => {
    this.props.handleFeedback(selection);
    this.setState({ dialogOpen: false });
  };

  scrollToLeft = () => {
    const lineData = this.props.session.activity.filter(activity => activity.category === 'share');
    const width = 300 * (lineData.length > 6 ? (lineData.length / 6) : 1);
    if (this.feelingContainer) this.feelingContainer.scrollLeft = width;
  };

  render() {
    const { classes, session } = this.props;
    const lineData = session.activity.filter(activity => activity.category === 'share');
    return (
      <Paper className={classes.root}>
        <Grid container justify="center">
          <Grid container direction="row" justify="center" style={{ backgroundColor: grey[50] }} >
            <IconButton
              className={classes.iconButton}

              aria-label="Agenda"
              onClick={() => this.handleDialogOpen({ type: 'Suggestions' })}
            >
              <AssignmentLateIcon className={classes.icon} />
            </IconButton>
            <ChatEntry
              handleTextChange={this.handleTextChange}
              chatText={this.state.chatText}
              handleSubmit={this.handleSubmit}
            />
            <IconButton
              className={classes.iconButton}
              aria-label="Share"
              onClick={() => this.handleDialogOpen({ type: 'Feeling' })}
            >
              <FaceIcon className={classes.icon} />
            </IconButton>
            {/* <IconButton
              className={classes.iconButton}

              aria-label="Chat"
              onClick={() => this.handleDialogOpen({ type: 'Chat' })}
            >
              <ChatIcon className={classes.icon} />
            </IconButton> */}
          </Grid>
          {lineData.length > 0 ?
            <Grid
              item
              style={{
                    margin: '10px 16px 16px 10px',
              }}
            >
              <div
                style={{ width: 300, height: 80, overflowX: 'auto' }}
                ref={(el) => { this.feelingContainer = el; }}
              >
                <Grid >
                  <ResponsiveContainer width={300 * (lineData.length > 6 ? (lineData.length / 6) : 1)} height={70} >
                    <LineChart
                      data={lineData || {}}
                      margin={{
                    top: 15, right: 15, bottom: 15, left: 15,
                    }}
                    >
                      <Tooltip content={this.customiseToolTip} isAnimationActive={false} />
                      <Line animationDuration={300} type="monotone" dataKey="value" stroke="grey" stroke-dasharray="5, 5" strokeWidth={1} dot={<CustomizedDot />} />
                    </LineChart>

                  </ResponsiveContainer>
                </Grid>
              </div>
            </Grid> :
          null}
          <Grid item />

          {/* <Button color="default" aria-label="feedback" >
          <RemoveRedEyeIcon className={classes.icon} />
          Feedback
        </Button> */}
          <Dialog
            open={this.state.dialogOpen}
            onClose={this.handleDialogClose}
            className={classes.dialog}
          >
            <DialogTitle className={classes.dialogTitle}>
              {this.state.actionType}
            </DialogTitle>
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

          <List dense className={classes.list}>
            <Divider />

            {this.props.session.activity
                .slice(0)
                .reverse()
                .map(activity => (
                  activity.category !== 'share' ?
                    <div key={activity.dateTime}>
                      <ListItem style={{ padding: 0 }}>
                        <Avatar className={classes.avartar}>
                          {getAvatar(activity.type)}
                        </Avatar>
                        <ListItemText
                          primary={
                          activity.type === 'Chat'
                            ? activity.text
                            : activity.type
                        }
                          secondary={`${
                          this.props.session.attendees.find(attendee => attendee.userId === activity.userId).name
                        } ${moment(activity.dateTime).fromNow()}`}
                        />
                      </ListItem>
                      <Divider />
                    </div>
                : null
              ))}
          </List>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Participate);
