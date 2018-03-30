import React from 'react';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Grid from 'material-ui/Grid';
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
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 240,
    },
  },

  container: {
    padding: 5,
    // [theme.breakpoints.up('xl')]: {
    //   paddingRight: 240,
    // },
    // backgroundColor: theme.palette.background.paper,
    // height: 'calc(100vh-120)',
  },
});

class SessionTabs extends React.Component {
  state = {
    value: 0,
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
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Grid container justify="center" spacing={0} className={classes.container} >

        <Grid item xs={12} >

          <Initiate
            session={this.props.session}
            status={this.props.status}
            userIndex={this.props.userIndex}
          />

        </Grid>


        {/* <Grid item xs={12} sm={8} md={6} lg={6}>

        </Grid> */}

        <Grid item xs={12} >
          <DecisionMap
            handleUpdate={this.props.handleUpdate}
            handleMapLabel={this.props.handleMapLabel}
            status={this.props.status}
            session={this.props.session}
            userIndex={this.props.userIndex}
            handleDisableSwipe={this.handleDisableSwipeable}
          />
          <Participate
            handleFeedback={this.props.handleFeedback}
            session={this.props.session}
          />
        </Grid>


      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SessionTabs);
