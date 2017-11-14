import React, { Component } from 'react';
import { throttle } from 'lodash';
import AppService from '../../AppService';
import { login } from '../authentication/Auth';
import DecisionMap from './DecisionMap';

const sessionFeed = AppService.service('sessions');
const users = AppService.service('users');

class LiveSession extends Component {
    state={
      session: {},
    }

    componentWillMount() {
      this.setState({
        session: this.props.session,
      });
      login()
        .then((user) => {
          users.patch(user._id, { currentSession: this.props.session._id });
        });
    }

    componentDidMount() {
      sessionFeed.on('patched', throttle(session => this.setState({ session }), 50));
    }

    handleUpdate = (data) => {
      // sessionFeed.patch(this.state.session._id, { currentStatus: !this.state.session.currentStatus });
      // const query = { attendees: { $elemMatch: { name: this.state.user.name } } };
      const updateObj = {};
      updateObj[`attendees.${this.props.userIndex}.status`] = data;
      sessionFeed.patch(this.state.session._id, updateObj);
    }

    render() {
      if (this.state.session && this.state.session.attendees) {
        return (
          <div >
            <DecisionMap handleUpdate={this.handleUpdate} attendees={this.state.session.attendees} userIndex={this.props.userIndex} />

          </div>);
      } return (<div> Session empty</div>);
    }
}

export default LiveSession;

// {this.state.session.attendees.map(attendee => (
//               <div key={attendee.name} >
//                 {attendee.userId === this.props.user._id ?
//                   <Button
//                     raised
//                     onClick={() => this.handleStatusUpdate()}
//                     color={this.state.session && this.state.session.currentStatus ? 'primary' : 'accent'}
//                   >
//                     {attendee.name}
//                   </Button> :
//                   <Button color={this.state.session && this.state.session.currentStatus ? 'primary' : 'accent'}>
//                     {attendee.name}
//                   </Button> }
//               </div>))}
