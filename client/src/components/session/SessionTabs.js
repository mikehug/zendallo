import React from 'react';
import { withStyles } from 'material-ui/styles';
// import SwipeableViews from 'react-swipeable-views';
// import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
// import GameIcon from 'material-ui-icons/Games';
// import ShareIcon from 'material-ui-icons/Share';
// import PlayArrowIcon from 'material-ui-icons/PlayCircleOutline';
import DecisionMap from './DecisionMap';
import Participate from './Participate';
import Agenda from './Agenda';

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
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 240,
    },
  },

  container: {
    width: 960,
    marginTop: 5,
    // [theme.breakpoints.up('xl')]: {
    //   paddingRight: 240,
    // },
    // backgroundColor: theme.palette.background.paper,
    // height: 'calc(100vh-120)',
  },
  interactPanel: {
    padding: 16,
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

  // handleChangeIndex = (index) => {
  //   this.setState({ value: index });
  // };

  handleDisableSwipeable = (disabled) => {
    this.setState({ disableSwipe: disabled });
  };

  render() {
    const { classes, theme } = this.props;

    return (

      <Grid container justify="center" spacing={0} >
        <Paper className={classes.container}>

          <Grid item xs={12} >

            <Agenda
              session={this.props.session}
              status={this.props.status}
              userIndex={this.props.userIndex}
            />

          </Grid>


          {/* <Grid item xs={12} sm={8} md={6} lg={6}>

        </Grid> */}


          <Grid item xs={12} >
            <Grid container justify="center" className={classes.interactPanel} >
              <Grid item xs={12} md={6} >
                <DecisionMap
                  handleUpdate={this.props.handleUpdate}
                  handleMapLabel={this.props.handleMapLabel}
                  status={this.props.status}
                  session={this.props.session}
                  userIndex={this.props.userIndex}
                  handleDisableSwipe={this.handleDisableSwipeable}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <Participate
                  handleFeedback={this.props.handleFeedback}
                  session={this.props.session}
                />
              </Grid>
            </Grid>

          </Grid>

        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SessionTabs);
