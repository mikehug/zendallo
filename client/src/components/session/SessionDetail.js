import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import AppService from '../../AppService';
import JoinSession from './JoinSession';
import SessionNotValid from './SessionNotValid';
import LiveSession from './LiveSession';

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
              this.setState({ session: result.data[0] });
              if (this.findAttendeeIndex() !== -1) this.setState({ attendee: true });
            });
        });
    }

    findAttendeeIndex = () => {
      const user = AppService.get('user');
      return (this.state.session && this.state.session.attendees.findIndex(attendee => attendee.userId === user._id));
    }

    handleSubmit = (values, props) => {
      props.setSubmitting(true);
      const user = AppService.get('user');
      const { attendees } = this.state.session;
      const tokenData = { sessionCode: this.state.session.code, userId: user._id };
      AppService.service('session-tokens').create(tokenData)
        .then((result) => {
          attendees.push({
            name: values.name,
            userId: user._id,
            status: { x: 0.5, y: 0.5 },
            token: result,
          });
          AppService.service('sessions').patch(this.state.session._id, { attendees })
            .then(() => {
              this.setState({ attendee: true });
            });
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
            <Typography variant="title">{this.state.session.name} </Typography>
            <JoinSession id={this.state.session._id} handleSubmit={this.handleSubmit} />
          </div>);
      } return (
        <SessionNotValid />
      );
    }
}

export default withRouter(SessionDetail);
