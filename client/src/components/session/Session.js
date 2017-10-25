import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import AppService from '../../AppService';
import ListSessions from './ListSessions';

const styles = () => ({
  root: {
    padding: 10,
    width: 300,
  },
});

class Session extends Component {
  state = {
    sessions: [],
  }

  componentWillMount() {
    const user = AppService.get('user');
    AppService.service('sessions').find({ userId: user._id })
      .then((result) => {
        this.setState({ sessions: result.data });
      });
  }

  createSession = () => {
    AppService.service('sessions').create({ startTime: Date.now(), attendees: [] })
      .then((result) => {
        console.log(`created: ${result}`);
      });
  }

  render() {
    const data = this.state.sessions;
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <ListSessions data={data} />
        <Button onClick={() => this.createSession()} >
              Create Session
        </Button>
      </div>

    );
  }
}

export default withRouter(withStyles(styles)(Session));
