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

function TabContainer({ children, dir }) {
  return (
    <Paper>
      <Grid direction="column" alignContent="center">
        <Typography
          align="justify"
          dir={dir}
          style={{ width: 300, padding: 8 }}
        >
          {children}
        </Typography>
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
    padding: 5,
  },
  details: {},
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
          <TabContainer dir={theme.direction} className={classes.container}>
            <DriverDetails className={classes.details} />
          </TabContainer>
        )}
        {this.state.value === 1 && (
          <TabContainer dir={theme.direction} className={classes.container}>
            <PioneerDetails className={classes.details} />
          </TabContainer>
        )}
        {this.state.value === 2 && (
          <TabContainer dir={theme.direction} className={classes.container}>
            <RelaterDetails className={classes.details} />
          </TabContainer>
        )}
        {this.state.value === 3 && (
          <TabContainer dir={theme.direction} className={classes.container}>
            <AnalyzerDetails className={classes.details} />
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
