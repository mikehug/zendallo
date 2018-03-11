import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import AnalyzerDetails from './AnalyzerDetails';
import PioneerDetails from './PioneerDetails';
import DriverDetails from './DriverDetails';
import RelaterDetails from './RelaterDetails';

function TabContainer({ children }) {
  return (
    <Paper style={{ marginTop: 10 }} >
      <Grid container direction="column" alignContent="center">
        <div style={{ fontFamily: 'Roboto', textAlign: 'justify', maxWidth: 320 }} >
          {children}
        </div>
      </Grid>
    </Paper>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 650,
  },
  container: {
  },

});

class ProfileTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Driver" />
            <Tab label="Pioneer" />
            <Tab label="Relater" />
            <Tab label="Analyzer" />
          </Tabs>
        </AppBar>

        {this.state.value === 0 && (
          <TabContainer className={classes.container}>
            <DriverDetails />
          </TabContainer>
        )}
        {this.state.value === 1 && (
          <TabContainer className={classes.container}>
            <PioneerDetails />
          </TabContainer>
        )}
        {this.state.value === 2 && (
          <TabContainer className={classes.container}>
            <RelaterDetails />
          </TabContainer>
        )}
        {this.state.value === 3 && (
          <TabContainer className={classes.container}>
            <AnalyzerDetails />
          </TabContainer>
        )}
      </div>
    );
  }
}

ProfileTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProfileTabs);
