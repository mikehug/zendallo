import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withRouter, Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import AppService from '../../AppService';
import JoinSession from './JoinSession';

class SessionDetail extends Component {
    state = {
      session: null,
      attendee: false,
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
      return (this.state.session.attendees.find(attendee => attendee.userId === user._id));
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
      if (this.state.session && this.state.attendee) return (<div> Let go!</div>);
      else if (this.state.session) {
        return (
          <div>
            <JoinSession id={this.state.session._id} handleSubmit={this.handleSubmit} />
          </div>);
      } return (
        <div>
          <Typography type="subheading" >
                    Code not valid
          </Typography>
          <Link to="/session" href="/session" >
            <Button> Session Home</Button>
          </Link>

        </div>
      );
    }
}

export default withRouter(SessionDetail);
