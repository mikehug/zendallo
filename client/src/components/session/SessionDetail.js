import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppService from '../../AppService';
import JoinSession from './JoinSession';
import SessionNotValid from './SessionNotValid';
import LiveSession from './LiveSession';

class SessionDetail extends Component {
    state = {
      session: null,
      attendee: false,
      user: {},
    }

    componentWillMount() {
      AppService.service('sessions').find({
        query: {
          code: this.props.match.params.code,
        },
      })
        .then((result) => {
          this.setState({ session: result.data[0] });
          if (this.checkAttendee()) this.setState({ attendee: true });
        });
    }

    checkAttendee = () => {
      const user = AppService.get('user');
      this.setState({ user });
      return (this.state.session && this.state.session.attendees.find(attendee => attendee.userId === user._id));
    }

    handleSubmit = (values, props) => {
      props.setSubmitting(true);
      const user = AppService.get('user');
      const { attendees } = this.state.session;
      attendees.push({
        name: values.name,
        userId: user._id,
        status: 'active',
      });
      AppService.service('sessions').patch(this.state.session._id, { attendees })
        .then(() => {
          this.setState({ attendee: true });
        });
    }

    render() {
      if (this.state.session && this.state.attendee) {
        return (
          <div>
            <LiveSession session={this.state.session} user={this.state.user} />
          </div>);
      } else if (this.state.session) {
        return (
          <div>
            <JoinSession id={this.state.session._id} handleSubmit={this.handleSubmit} />
          </div>);
      } return (
        <SessionNotValid />
      );
    }
}

export default withRouter(SessionDetail);
