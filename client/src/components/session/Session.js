import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import AppService from '../../AppService';
import ListSessions from './ListSessions';
import CreateSession from './CreateSession';

const styles = () => ({
  root: {
    marginTop: 15,
    padding: 10,
    width: 300,
  },
  button: {
    marginTop: 10,
  },
});

class Session extends Component {
  state = {
    sessions: [],
  }

  componentWillMount() {
    // console.log(user);
    const user = AppService.get('user');
    AppService.service('sessions').find({ userId: user._id })
      .then((result) => {
        this.setState({ sessions: result.data });
      });
  }

  deleteSession = (session) => {
    const { sessions } = this.state;
    const deleteIndex = this.state.sessions.findIndex(sess => sess._id === session._id);
    sessions.splice(deleteIndex, 1);
    AppService.service('sessions').remove(session._id)
      .then(() => {
        this.setState({ sessions });
      });
  }

  createSession = (values) => {
    AppService.service('sessions').create({
      name: values.name,
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      startTime: Date.now(),
      attendees: [],
      activity: [],

    })
      .then((result) => {
        const { sessions } = this.state;
        sessions.push(result);
        this.setState({ sessions });
      });
  }

  render() {
    const data = this.state.sessions;
    const { classes } = this.props;
    return (
      <Paper className={classes.root} >

        <ListSessions data={data} handleDelete={this.deleteSession} />
        <CreateSession data={data} handleCreate={this.createSession} />
      </Paper>

    );
  }
}

export default withRouter(withStyles(styles)(Session));
