import React from 'react';
import { withRouter } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {BottomNavigationAction,} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import GameIcon from 'material-ui-icons/Games';
import ShareIcon from 'material-ui-icons/Share';
import PlayArrowIcon from 'material-ui-icons/PlayCircleOutline';
import AppService from '../../AppService';
import { getUser } from '../authentication/Auth';
import Explore from './Explore';
import Practice from './Practice';

function TabContainer({ children, dir }) {
  return <div dir={dir}>{children}</div>;
}

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 3,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 125,
    },
    marginLeft: 5,
  },
  paper: {
    margin: '15px 15px 0 5px',
  },
  container: {
    // backgroundColor: 'grey',
    height: 'calc(100vh-120)',
  },
});

class Learn extends React.Component {
  state = {
    value: 0,
    disableSwipe: false,
    course: {},
    module: {},
  };

  componentWillMount() {
    AppService.service('resources')
      .find({ url: this.props.match.params.course })
      .then((result) => {
        if (result.data) {
          this.setState({
            course: result.data[0],
            module: result.data[0].modules[0],
          });
        }
      });
  }
  setLessons = () => {};

  storeResult = (data) => {
    const user = getUser();
    AppService.service('users').patch(user._id, data);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  handleDisableSwipeable = (disabled) => {
    this.setState({ disableSwipe: disabled });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Paper className={classes.paper}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          className={classes.container}
          disabled={this.state.disableSwipe}
        >
          <TabContainer dir={theme.direction}>
            <Explore
              course={this.state.course}
              setLessons={this.setLessons}
              module={this.state.module}
              changeTab={this.handleChangeIndex}
            />
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Practice
              module={this.state.module}
              storeResult={this.storeResult}
            />
          </TabContainer>
        </SwipeableViews>

        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Explore" icon={<ShareIcon />} />
          <BottomNavigationAction label="Practice" icon={<GameIcon />} />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Learn));
