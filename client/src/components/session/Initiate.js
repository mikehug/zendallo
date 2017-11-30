import React, { Component } from 'react';
import { connect, createLocalTracks, createLocalVideoTrack } from 'twilio-video';
import Grid from 'material-ui/Grid';

class Initiate extends Component {
  componentDidMount() {
    const { token } = this.props.session.attendees[this.props.userIndex];
    console.log(this.props.session);
    createLocalTracks({
      audio: true,
      video: { width: 300 },
    }).then(localTracks => connect(token, {
      name: this.props.session.attendees[this.props.userIndex].userId,
      tracks: localTracks,
    })).then((room) => {
      room.participants.forEach((participant) => {
        console.log(`Already in Room: '${participant.identity}'`);
        
        const tracks = Array.from(participant.tracks.values());
        tracks.forEach((track) => {
          document.getElementById('remote-media').appendChild(track.attach());
        });
      });
      console.log('Connected to Room :', room);
      room.on('participantConnected', (participant) => {
        console.log('A remote Participant connected: ', participant);
      });
      room.on('participantConnected', (participant) => {
        console.log(`Participant connected: ${participant.identity}`);
        participant.tracks.forEach((track) => {
          document.getElementById('remote-media').appendChild(track.attach());
        });
      });


      room.on('participantDisconnected', (participant) => {
        console.log(`Participant disconnected: ${participant.identity}`);
      });
    }).catch((error) => {
      console.error(`Unable to connect to Room: ${error.message}`);
    });
    createLocalVideoTrack().then((track) => {
      const localMediaContainer = document.getElementById('local-media');
      localMediaContainer.appendChild(track.attach());
    });
  }


  render() {
    return (
      <div>
        <div id="remote-media" />
        <div id="local-media" />
      </div>
    );
  }
}

export default Initiate;
