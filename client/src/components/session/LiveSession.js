import React, { Component } from 'react';
import { throttle } from 'lodash';
import AppService from '../../AppService';
import { login } from '../authentication/Auth';
import SessionTabs from './SessionTabs';

const sessionFeed = AppService.service('sessions');
const users = AppService.service('users');

class LiveSession extends Component {
    state={
      session: {},
      status: {},
    }

    componentWillMount() {
      this.setState({
        session: this.props.session,
      });
      // TODO: Check if this is necessary
      login()
        .then((user) => {
          users.patch(user._id, { currentSession: this.props.session._id });
        });
      this.setState({
        session: this.props.session,
        status: this.props.session.attendees[this.props.userIndex].status,
      });
    }

    componentDidMount() {
      sessionFeed.on('updated', throttle(session => this.setState({ session }), 50));
      sessionFeed.on('patched', throttle(session => this.setState({ session }), 50));
    }

    handleFeedback =(data) => {
      sessionFeed.update(
        this.state.session._id,
        { $push: { activity: data } },
      );
    }

    handleMapLabel =(data) => {
      sessionFeed.patch(
        this.state.session._id,
        data,
      );
    }

    handleUpdate = (data) => {
      // sessionFeed.patch(this.state.session._id, { currentStatus: !this.state.session.currentStatus });
      // const query = { attendees: { $elemMatch: { name: this.state.user.name } } };
      this.setState({ status: data });
      const updateObj = {};
      updateObj[`attendees.${this.props.userIndex}.status`] = data;
      sessionFeed.update(this.state.session._id, { $set: updateObj });
    }

    render() {
      if (this.state.session && this.state.session.attendees) {
        return (
          <div >
            {/* <Typography variant="title"  gutterBottom >{this.state.session.name} </Typography> */}

            <SessionTabs
              handleUpdate={this.handleUpdate}
              handleFeedback={this.handleFeedback}
              handleMapLabel={this.handleMapLabel}
              status={this.state.status}
              session={this.state.session}
              userIndex={this.props.userIndex}
            />


          </div>);
      } return (<div> Session empty</div>);
    }
}

export default LiveSession;
