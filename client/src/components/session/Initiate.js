import React, { Component } from 'react';
import { connect, createLocalTracks } from 'twilio-video';
import Grid from 'material-ui/Grid';

let activeRoom;

class Initiate extends Component {
  componentDidMount() {
    const { token } = this.props.session.attendees[this.props.userIndex];
    console.log(this.props.session);
    createLocalTracks({
      audio: true,
      video: { width: 320 },
    }).then(localTracks => connect(token, {
      name: this.props.session.attendees[this.props.userIndex].userId,
      tracks: localTracks,
    })).then((room) => {
      activeRoom = room;
      let previewContainer = document.getElementById('local-media');
      if (!previewContainer.querySelector('video')) {
        const videoElement = document.createElement('video');
        videoElement.style.width = '80px';
        videoElement.id = 'local-video';
        previewContainer.appendChild(videoElement);
        this.attachLocalVideo(room.localParticipant, videoElement);
      }
      // Attach the Tracks of the Room's Participants.
      room.participants.forEach((participant) => {
        console.log(`Already in Room: '${participant.identity}'`);
        previewContainer = document.getElementById('remote-media');
        this.attachParticipantTracks(participant, previewContainer);
      });

      // When a Participant joins the Room, log the event.
      room.on('participantConnected', (participant) => {
        console.log(`Joining: '${participant.identity}'`);
      });

      // When a Participant adds a Track, attach it to the DOM.
      room.on('trackAdded', (track, participant) => {
        console.log(`${participant.identity} added track: ${track.kind}`);
        previewContainer = document.getElementById('remote-media');
        this.attachTracks([track], previewContainer);
      });

      // When a Participant leaves the Room, detach its Tracks.
      room.on('participantDisconnected', (participant) => {
        console.log(`Participant '${participant.identity}' left the room`);
        this.detachParticipantTracks(participant);
      });

      // Once the LocalParticipant leaves the room, detach the Tracks
      // of all Participants, including that of the LocalParticipant.
      room.on('disconnected', () => {
        this.detachParticipantTracks(room.localParticipant);
        room.participants.forEach(this.detachParticipantTracks);
      });

      room.on('participantDisconnected', (participant) => {
        console.log(`Participant disconnected: ${participant.identity}`);
      });
    }).catch((error) => {
      console.error(`Unable to connect to Room: ${error.message}`);
    });
    // createLocalVideoTrack().then((track) => {
    //   const localMediaContainer = document.getElementById('local-media');
  //   localMediaContainer.appendChild(track.attach());
  // });
  }

  componentWillUnmount() {
    if (activeRoom) {
      console.log('disconnected');
      activeRoom.localParticipant.tracks.forEach((track) => {
        track.stop();
        track.detach();
      });
      activeRoom.disconnect();
    }
  }

  attachLocalVideo = (participant, element) => {
    const tracks = Array.from(participant.tracks.values());
    tracks.forEach((track) => {
      track.attach(element);
    });
  };

  attachTracks = (tracks, container) => {
    tracks.forEach((track) => {
      container.appendChild(track.attach());
    });
  };

  // Attach the Participant's Tracks to the DOM.
  attachParticipantTracks = (participant, container) => {
    const tracks = Array.from(participant.tracks.values());
    this.attachTracks(tracks, container);
  };

  detachTracks = (tracks) => {
    tracks.forEach((track) => {
      track.detach().forEach((detachedElement) => {
        detachedElement.remove();
      });
    });
  }

  // Detach the Participant's Tracks from the DOM.
 detachParticipantTracks= (participant) => {
   const tracks = Array.from(participant.tracks.values());
   this.detachTracks(tracks);
 }

 render() {
   return (
     <Grid container justify="center" >
       <Grid item >
         <div id="remote-media" />
       </Grid>
       <Grid item >
         <div id="local-media" />
       </Grid>
     </Grid>
   );
 }
}

export default Initiate;
