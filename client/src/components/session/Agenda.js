import React, { Component } from 'react';
// import { connect, createLocalTracks } from 'twilio-video';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import List, {
  ListItem,
  ListItemSecondaryAction,
  // ListSubheader,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Person from 'material-ui-icons/Person';
import { withStyles } from 'material-ui/styles';
import ListIcon from 'material-ui-icons/List';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import EditSesssion from './EditSession';
// import TextField from 'material-ui/TextField';
// import PlayArrowIcon from 'material-ui-icons/PlayArrow';
// import ExpansionPanel, {
//   ExpansionPanelSummary,
//   ExpansionPanelDetails,
// } from 'material-ui/ExpansionPanel';
// import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
// import ReactAudioPlayer from 'react-audio-player';
// // ...

const styles = () => ({
  root: {
    padding: 16,
    minWidth: 340,
    maxWidth: 960,
    minHeight: 260,
  },
  panel: {
    maxWidth: 420,
    marginTop: 16,
    height: 230,
    paddingTop: 10,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  details: {
    flexDirection: 'column',
  },
  list: {
    width: 320,
  },
  heading: {
    textAlign: 'left',
    paddingBottom: 10,
  },
  popover: {
    padding: 16,
  },
  popoverDetail: {
    padding: '4px 0 4px 0',
  },
});


class Agenda extends Component {
  state ={
    popoverOpen: false,
  }

  handlePopoverOpen = () => {
    this.setState({ popoverOpen: true });
  };

  handlePopoverClose = () => {
    this.setState({ popoverOpen: false });
  };

  render() {
    const { classes, session } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="headline" gutterBottom>
          {session.name}
        </Typography>
        <Typography variant="subheading" gutterBottom>
          {session.objective}
        </Typography>

        <Grid container justify="center" spacing={0} >
          <Grid item xs={12} md={6} >
            <Paper className={classes.panel}>
              <Grid container direction="row" justify="center" alignItems="center">

                <Typography variant="subheading" style={{ paddingLeft: 32 }} >
              Agenda
                </Typography>
                <EditSesssion session={session} />
              </Grid>

              <List dense className={classes.list}>
                <Divider />
                {session.agenda.split('\n').map(i => (
                  <div key={i}>
                    <ListItem >
                      <ListItemIcon>
                        <ListIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary={i} />
                    </ListItem>
                    <Divider />
                  </div>
              ))}
              </List>

            </Paper>
          </Grid>

          <Grid item xs={12} md={6} >
            <Paper className={classes.panel}>
              <Typography variant="subheading" style={{ height: 32 }}>
              Attendees {` (${session.attendees.length})`}
              </Typography>
              {/* </ExpansionPanelSummary> */}
              {/* <ExpansionPanelDetails> */}
              <List dense className={classes.list}>
                <Divider />
                {session.attendees.map((attendee, index) => (
                  <div key={attendee.userId}>
                    <ListItem >
                      <ListItemIcon>
                        <Person color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary={attendee.name} />
                      {attendee.isProfileVisible ?
                        <ListItemSecondaryAction>
                          <IconButton
                            aria-label="Comments"
                            color="secondary"
                            onClick={() => this.handlePopoverOpen()}
                            buttonRef={(node) => {
                                                this[`anchorEl${index}`] = node;
                                              }}
                          >
                            <ListIcon />
                          </IconButton>
                        </ListItemSecondaryAction> : null}
                      <Popover
                        open={this.state.popoverOpen}
                        onClose={this.handlePopoverClose}
                        anchorEl={this[`anchorEl${index}`]}
                      >

                        <div className={classes.popover}>
                          <Typography variant="caption" gutterBottom >Name:</Typography>
                          <Typography className={classes.popoverDetail} >
                            {attendee.profile.profileDetails && attendee.profile.profileDetails.name}
                          </Typography>
                          <Typography variant="caption" gutterBottom >Company:</Typography>
                          <Typography className={classes.popoverDetail}>
                            {attendee.profile.profileDetails && attendee.profile.profileDetails.company}
                          </Typography>
                          <Typography variant="caption" gutterBottom>Location:</Typography>
                          <Typography className={classes.popoverDetail} >{
                            attendee.profile.profileDetails && attendee.profile.profileDetails.location}
                          </Typography>
                          <Typography variant="caption" gutterBottom>Interests:</Typography>
                          <Typography className={classes.popoverDetail} >
                            {attendee.profile.profileDetails && attendee.profile.profileDetails.interests}
                          </Typography>
                        </div>
                      </Popover>
                    </ListItem>
                    <Divider />
                  </div>
              ))}
              </List>

            </Paper>
          </Grid>

        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Agenda);
