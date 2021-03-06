import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { withRouter, Route, Switch } from 'react-router-dom';
import ListTeams from './ListTeams';
import CreateTeam from './CreateTeam';
import AppService from '../../AppService';
import AlertDialog from '../utils/AlertDialog';
import TeamDetail from './TeamDetail';
import { getUser } from '../authentication/Auth';

const styles = () => ({
  root: {
    marginTop: 15,
    padding: 10,
    maxWidth: 400,
  },
});

class Team extends Component {
  state = {
    teams: [],
    alert: {
      open: false,
      title: '',
      contentText: '',
      id: '',
    },
    selectedTeam: {},
  };

  componentWillMount() {
    const user = getUser();
    AppService.service('teams')
      .find({ query: { members: { email: user.email } } })
      .then((result) => {
        this.setState({ teams: result.data });
      });
  }

  handleCreate = (name) => {
    const user = getUser();
    AppService.service('teams')
      .create({ name, members: [{ email: user.email }] })
      .then((result) => {
        const { teams } = this.state;
        teams.push(result);
        this.setState({ teams });
      });
  };

  openDeleteAlert = (team) => {
    this.setState({
      alert: {
        open: true,
        title: 'Confirm Delete',
        contentText: `Name: ${team.name}`,
        id: team._id,
      },
    });
  };

  handleDelete = () => {
    AppService.service('teams')
      .remove(this.state.alert.id)
      .then(result =>
        this.setState({
          teams: this.state.teams.filter(team => team._id !== result._id),
          alert: { open: false },
        }) );
  };

  handleAlertClose = () => {
    this.setState({ alert: { open: false } });
  };

  handleAddMember = (id, members) => {
    const { teams } = this.state;
    const index = teams.findIndex(team => team._id === id);
    teams[index].members = members;
    AppService.service('teams')
      .patch(id, { members })
      .then(() => {
        this.setState({ teams });
      });
  };

  handleRemoveMember = (id, email) => {
    const { teams } = this.state;
    const index = teams.findIndex(team => team._id === id);
    const { members } = teams[index];
    const memberIndex = members.findIndex(member => member.email === email);
    members.splice(memberIndex, 1);
    AppService.service('teams')
      .patch(id, { members })
      .then(() => {
        this.setState({ teams });
      });
  };

  handleTeamSelect = (team) => {
    this.setState({ selectedTeam: team });
    this.props.history.push(`/teams/${encodeURI(team.name)}`);
  };

  render() {
    const data = this.state.teams;
    const { match, classes } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={match.url}
            render={() => (
              <Paper className={classes.root}>
                <ListTeams
                  data={data}
                  openDeleteAlert={this.openDeleteAlert}
                  handleTeamSelect={this.handleTeamSelect}
                />
                <CreateTeam data={data} handleCreate={this.handleCreate} />
                <AlertDialog
                  open={this.state.alert.open}
                  title={this.state.alert.title}
                  contentText={this.state.alert.contentText}
                  action={this.handleDelete}
                  handleAlertClose={this.handleAlertClose}
                />
              </Paper>
            )}
          />

          <Route
            path={`${match.url}/:name`}
            render={props => (
              <TeamDetail
                {...props}
                data={this.state.selectedTeam}
                handleAddMember={this.handleAddMember}
                handleRemoveMember={this.handleRemoveMember}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Team));
