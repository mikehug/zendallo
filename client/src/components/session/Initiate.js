import React from 'react';
// import { connect, createLocalTracks } from 'twilio-video';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import List, {
  ListItem,
  // ListSubheader,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Person from 'material-ui-icons/Person';
import { withStyles } from 'material-ui/styles';
import ListIcon from 'material-ui-icons/List';
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
    maxWidth: 950,
    minHeight: 260,
  },
  panel: {
    maxWidth: 420,
    padding: 16,
    minHeight: 200,
    maxHeight: 275,
    overflow: 'auto',
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
});

// const localTracks = {};

const Initiate = ({ classes, session }) =>
  // state = {
  //   activeRoom: false,
  // };

  // componentWillUnmount() {
  //   if (this.state.activeRoom) this.stopVideoConference();
  // }

  // handleVideoClick = () => {
  //   if (this.state.activeRoom) this.stopVideoConference();
  //   else this.startVideoConference();
  // };

  // stopVideoConference = () => {
  //   if (this.state.activeRoom) {
  //     this.state.activeRoom.localParticipant.tracks.forEach((track) => {
  //       track.stop();
  //       track.detach();
  //     });
  //     this.state.activeRoom.disconnect();
  //     this.setState({ activeRoom: false });
  //   }
  // };

  // startVideoConference = () => {
  //   const { token } = this.props.session.attendees[this.props.userIndex];
  //   createLocalTracks({
  //     audio: true,
  //     video: true,
  //   })
  //     .then((tracks) => {
  //       console.log(tracks);
  //       localTracks = tracks;
  //       return connect(token, {
  //         name: this.props.session.attendees[this.props.userIndex].userId,
  //         tracks: localTracks,
  //       });
  //     })
  //     .then((room) => {
  //       this.setState({ activeRoom: room });
  //       let previewContainer = document.getElementById('local-media');
  //       if (!previewContainer.querySelector('video')) {
  //         const videoElement = document.createElement('video');
  //         videoElement.style.width = '100px';
  //         videoElement.id = 'local-video';
  //         previewContainer.appendChild(videoElement);
  //         this.attachLocalVideo(room.localParticipant, videoElement);
  //       }
  //       // Attach the Tracks of the Room's Participants.
  //       room.participants.forEach((participant) => {
  //         previewContainer = document.getElementById('remote-media');
  //         this.attachParticipantTracks(participant, previewContainer);
  //       });

  //       // // When a Participant joins the Room, log the event.
  //       // room.on('participantConnected', (participant) => {
  //       //   console.log(`Joining: '${participant.identity}'`);
  //       // });

  //       // When a Participant adds a Track, attach it to the DOM.

  //       // room.on('trackAdded', (track, participant) => {
  //       room.on('trackAdded', (track) => {
  //         // console.log(`${participant.identity} added track: ${track.kind}`);
  //         previewContainer = document.getElementById('remote-media');
  //         this.attachTracks([track], previewContainer);
  //       });

  //       // When a Participant leaves the Room, detach its Tracks.
  //       room.on('participantDisconnected', (participant) => {
  //         // console.log(`Participant '${participant.identity}' left the room`);
  //         this.detachParticipantTracks(participant);
  //       });

  //       // Once the LocalParticipant leaves the room, detach the Tracks
  //       // of all Participants, including that of the LocalParticipant.
  //       room.on('disconnected', () => {
  //         this.detachParticipantTracks(room.localParticipant);
  //         room.participants.forEach(this.detachParticipantTracks);
  //       });

  //       // room.on('participantDisconnected', (participant) => {
  //       //   console.log(`Participant disconnected: ${participant.identity}`);
  //       // });
  //       // TODO: Error handling
  //     })
  //     .catch((error) => {
  //       localTracks.forEach((track) => {
  //         track.stop();
  //         track.detach();
  //       });
  //       console.log(error);
  //       window.alert(`Unable to connect to Room: ${error.message}`); // eslint-disable-line
  //     });
  // };

  // attachLocalVideo = (participant, element) => {
  //   const tracks = Array.from(participant.tracks.values());
  //   tracks.forEach((track) => {
  //     track.attach(element);
  //   });
  // };

  // attachTracks = (tracks, container) => {
  //   tracks.forEach((track) => {
  //     if (track.kind === 'video') {
  //       const videoRemoteElement = document.createElement('video');
  //       videoRemoteElement.style.width = '300px';
  //       container.appendChild(videoRemoteElement);
  //       track.attach(videoRemoteElement);
  //     } else {
  //       container.appendChild(track.attach());
  //     }
  //   });
  // };

  // // Attach the Participant's Tracks to the DOM.
  // attachParticipantTracks = (participant, container) => {
  //   const tracks = Array.from(participant.tracks.values());
  //   this.attachTracks(tracks, container);
  // };

  // detachTracks = (tracks) => {
  //   tracks.forEach((track) => {
  //     track.detach().forEach((detachedElement) => {
  //       detachedElement.remove();
  //     });
  //   });
  // };

  // // Detach the Participant's Tracks from the DOM.
  // detachParticipantTracks = (participant) => {
  //   const tracks = Array.from(participant.tracks.values());
  //   this.detachTracks(tracks);
  // };

  (
    <Paper className={classes.root}>
      <Typography variant="headline" gutterBottom>
        {session.name}
      </Typography>
      {/* <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subheading" color="textSecondary">
              Purpose
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2" color="textSecondary">
              {this.props.session.purpose}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}

      {/* <ExpansionPanel defaultExpanded className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subheading" color="textSecondary">
              Team Ritual
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography
              variant="body2"
              className={classes.heading}
              color="textSecondary"
              align="center"
            >
              Try this audio to start the session mindfully!
            </Typography>
            <ReactAudioPlayer src="/micromeditation.mp3" controls /> */}

      {/* <List dense>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <PlayCircleOutline color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Mindful Meeting Audio" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <PlayCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Appreciation Exercise Audio" />
              </ListItem>
              <Divider />
            </List> */}
      {/* </ExpansionPanelDetails>
        </ExpansionPanel> */}

      {/* <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}

      <Grid container justify="center" spacing={0} >
        <Grid item xs={12} md={6} >
          <Paper className={classes.panel}>
            <Typography variant="subheading" color="textSecondary">
              Agenda
            </Typography>
            {/* </ExpansionPanelSummary>
          <ExpansionPanelDetails> */}
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
            <Typography variant="subheading" color="textSecondary">
              Attendees
            </Typography>
            {/* </ExpansionPanelSummary> */}
            {/* <ExpansionPanelDetails> */}
            <List dense className={classes.list}>
              <Divider />
              {session.attendees.map(attendee => (
                <div key={attendee.userId}>
                  <ListItem >
                    <ListItemIcon>
                      <Person color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={attendee.name} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
            {/* <Grid container justify="center" spacing={0}>
                <Grid item>
                  <div id="remote-media" />
                </Grid>
                <Grid item>
                  <div id="local-media" />
                  <Button onClick={() => this.handleVideoClick()} color="secondary">
                    {this.state.activeRoom ? 'Stop Video' : 'Start Video'}
                  </Button>
                </Grid>
              </Grid> */}
          </Paper>
        </Grid>


      </Grid>

      {/* </ExpansionPanelDetails>
        </ExpansionPanel> */}

      {/* <ExpansionPanel defaultExpanded className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}

      {/* </ExpansionPanelDetails>
        </ExpansionPanel> */}
      {/* <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
      {/* <Typography variant="subheading" color="textSecondary">
              Video Conference
        </Typography> */}
      {/* </ExpansionPanelSummary>
          <ExpansionPanelDetails> */}

      {/* </ExpansionPanelDetails>
        </ExpansionPanel> */}
    </Paper>
  );

export default withStyles(styles)(Initiate);
