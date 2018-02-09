import React from 'react';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import GameIcon from 'material-ui-icons/Games';
import ShareIcon from 'material-ui-icons/Share';
import PlayArrowIcon from 'material-ui-icons/PlayCircleOutline';
import DecisionMap from './DecisionMap';
import Participate from './Participate';
import Initiate from './Initiate';

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  );
}

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 9999,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 120,
    },
  },
  container: {
    // backgroundColor: theme.palette.background.paper,
    height: 'calc(100vh-120)',

  },
});

class SessionTabs extends React.Component {
  state = {
    value: 1,
    disableSwipe: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  handleDisableSwipeable = (disabled) => {
    this.setState({ disableSwipe: disabled });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div >
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          className={classes.container}
          disabled={this.state.disableSwipe}
        >
          <TabContainer dir={theme.direction}>
            <Initiate session={this.props.session} status={this.props.status} userIndex={this.props.userIndex} />
          </TabContainer>

          <TabContainer dir={theme.direction} >
            <Participate />
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <DecisionMap
              handleUpdate={this.props.handleUpdate}
              status={this.props.status}
              session={this.props.session}
              userIndex={this.props.userIndex}
              handleDisableSwipe={this.handleDisableSwipeable}
            />
          </TabContainer>
        </SwipeableViews>

        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >

          <BottomNavigationAction label="Initiate" icon={<PlayArrowIcon />} />
          <BottomNavigationAction label="Participate" icon={<ShareIcon />} />
          <BottomNavigationAction label="Deliberate" icon={<GameIcon />} />
        </BottomNavigation>
      </div>

    );
  }
}

export default withStyles(styles, { withTheme: true })(SessionTabs);

