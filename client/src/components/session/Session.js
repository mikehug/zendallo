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
        <Typography type="title" color="secondary" gutterBottom>
                  Sessions
        </Typography>
        <ListSessions data={data} />
        <Button onClick={() => this.createSession()} color="primary" className={classes.button} >
              Create Session
        </Button>
      </div>

    );
  }
}

export default withRouter(withStyles(styles)(Session));
