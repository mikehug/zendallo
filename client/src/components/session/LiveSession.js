import React, { Component } from 'react';
import AppService from '../../AppService';
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
      AppService.authenticate()
        .then((user) => {
          users.patch(user._id, { currentSession: this.props.session._id });
        });
    }

    componentDidMount() {
      sessionFeed.on('patched', session => this.setState({ session }));
    }

    handleStatusUpdate = () => {
      sessionFeed.patch(this.state.session._id, { currentStatus: !this.state.session.currentStatus });
    }

    render() {
      if (this.state.session && this.state.session.attendees) {
        return (
          <div >
            <DecisionMap />

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
