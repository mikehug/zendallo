import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import AppService from '../../AppService';
import JoinSession from './JoinSession';
import SessionNotValid from './SessionNotValid';
import LiveSession from './LiveSession';

let user = {};

class SessionDetail extends Component {
    state = {
      session: null,
      attendee: false,
    }

    componentWillMount() {
      AppService.authenticate()
        .then(() => {
          AppService.service('sessions').find({
            query: {
              code: this.props.match.params.code,
            },
          })
            .then((result) => {
              if (result.data.length > 0) this.setState({ session: result.data[0] });
              else this.setState({ session: -1 });
              if (this.findAttendeeIndex() !== -1) this.setState({ attendee: true });
            });
        });
    }

    findAttendeeIndex = () => {
      user = AppService.get('user');
      return (this.state.session && this.state.session.attendees.findIndex(attendee => attendee.userId === user._id));
    }

    handleSubmit = (values, props) => {
      props.setSubmitting(true);
      user = AppService.get('user');
      const { attendees } = this.state.session;
      // const tokenData = { sessionCode: this.state.session.code, userId: user._id };
      // AppService.service('session-tokens').create(tokenData)
      //   .then((result) => {
      let profile = {};
      const { profileDetails, profileResult } = user;
      if (values.isProfileVisible && user.profileDetails) {
        profile = { profileDetails, profileResult };
      }
      attendees.push({
        name: values.name,
        isProfileVisible: values.isProfileVisible,
        profile,
        userId: user._id,
        status: { x: 0.5, y: 0.5 },
        // token: result,
      });
      // });
      AppService.service('sessions').patch(this.state.session._id, { attendees })
        .then(() => {
          this.setState({ attendee: true });
        });
    }

    render() {
      if (this.state.session && this.state.attendee) {
        return (
          <div>
            <LiveSession session={this.state.session} userIndex={this.findAttendeeIndex()} />
          </div>);
      } else if (this.state.session) {
        return (
          <div>
            <JoinSession id={this.state.session._id} name={this.state.session.name} handleSubmit={this.handleSubmit} user={user} />
          </div>);
      } else if (this.state.session === -1) {
        return (
          <SessionNotValid />
        );
      }
      return <CircularProgress />;
    }
}

export default withRouter(SessionDetail);
