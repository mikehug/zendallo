import React, { Component } from 'react';
// import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppService from '../../AppService';
import ListResources from './ListResources';

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

class Resources extends Component {
  state = {
    sessions: [],
  }

  componentWillMount() {
    AppService.service('resources').find()
      .then((result) => {
        this.setState({ sessions: result.data });
      });
  }

  render() {
    const data = this.state.sessions;
    const { classes } = this.props;
    return (
      <Paper className={classes.root} >

        <ListResources data={data} />
      </Paper>

    );
  }
}

export default withStyles(styles)(Resources);
