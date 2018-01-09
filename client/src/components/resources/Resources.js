import React, { Component } from 'react';
// import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import AppService from '../../AppService';
import ListResources from './ListResources';

const styles = () => ({
  root: {
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
      <div className={classes.root} >

        <ListResources data={data} />
      </div>

    );
  }
}

export default withStyles(styles)(Resources);
