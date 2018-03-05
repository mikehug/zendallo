import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppService from '../../AppService';
import ListResources from './ListResources';

const styles = () => ({
  root: {
    marginTop: 15,
    padding: 10,
    marginRight: 10,
    height: 400,
    maxWidth: 400,
  },
  list: {
    padding: 10,
    maxWidth: 320,
  },
});

class Resources extends Component {
  state = {
    sessions: [],
  };

  componentWillMount() {
    AppService.service('resources')
      .find()
      .then((result) => {
        this.setState({ sessions: result.data });
      });
  }

  render() {
    const data = this.state.sessions;
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid className={classes.list}>
          <Typography variant="title" gutterBottom>
            Learning Activities
          </Typography>
          <ListResources data={data} />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Resources);
