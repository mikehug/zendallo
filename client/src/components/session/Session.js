import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import AppService from '../../AppService';
import ListSessions from './ListSessions';

const styles = () => ({
  root: {
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
    AppService.authenticate()
      .then((user) => {
        AppService.service('sessions').find({ userId: user._id })
          .then((result) => {
            this.setState({ sessions: result.data });
          });
      });
  }

  deleteSession = (session) => {
    const { sessions } = this.state;
    const deleteIndex = this.state.sessions.findIndex(sess => sess._id === session._id);
    sessions.splice(deleteIndex, 1);
    console.log(sessions);
    AppService.service('sessions').remove(session._id)
      .then(() => {
        this.setState({ sessions });
      });
  }

  createSession = () => {
    AppService.service('sessions').create({ startTime: Date.now(), attendees: [] })
      .then((result) => {
        const { sessions } = this.state;
        sessions.push(result);
        this.setState({ sessions });
        console.log(result);
      });
  }

  render() {
    const data = this.state.sessions;
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <Typography type="title" color="secondary" gutterBottom>
                  Sessions
        </Typography>
        <ListSessions data={data} handleDelete={this.deleteSession} />
        <Button onClick={() => this.createSession()} color="primary" className={classes.button} >
              Create Session
        </Button>
      </div>

    );
  }
}

export default withRouter(withStyles(styles)(Session));
