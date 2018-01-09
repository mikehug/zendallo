import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import { withStyles } from 'material-ui/styles';
import '../../../../node_modules/video-react/dist/video-react.css';
import learn from './learn.svg';

const styles = {
  root: {
    paddingBottom: 20,
  },
};

class Video extends Component {
  state = {
    player: '',
  };

  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    if (state && state.ended && prevState === state.ended) this.props.nextLesson();
    this.setState({
      player: state,
      src: state.currentSrc,
    });
  }

  render() {
    return (
      <Grid container justify="center" className={this.props.classes.root} >
        <Grid item xs={11} sm={11} md={10} lg={8}>
          <div>
            <Player ref="player" fluid poster={learn} src={this.props.src}>
              <BigPlayButton position="center" />
              <LoadingSpinner />
            </Player>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Video);
