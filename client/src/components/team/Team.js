import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { withRouter, Route, Switch } from 'react-router-dom';
import ListTeams from './ListTeams';
import CreateTeam from './CreateTeam';
import AppService from '../../AppService';
import AlertDialog from '../utils/AlertDialog';
import TeamDetail from './TeamDetail';

const styles = () => ({
  root: {
    padding: 10,
    width: 300,
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
    }

    componentWillMount() {
      const user = AppService.get('user');
      AppService.service('teams').find({ userId: user._id })
        .then((result) => {
          this.setState({ teams: result.data });
        });
    }

    handleDelete = () => {
      AppService.service('teams').remove(this.state.alert.id)
        .then(result => this.setState({
          teams: this.state.teams.filter(team => team._id !== result._id),
          alert: { open: false },
        }));
    }

    handleAlertClose =() => {
      this.setState({ alert: { open: false } });
    }

    openDeleteAlert =(team) => {
      this.setState({
        alert: {
          open: true, title: 'Confirm Delete', contentText: `Name: ${team.name}`, id: team._id,
        },
      });
    }

    handleCreate = (name) => {
      AppService.service('teams').create({ name, members: [] })
        .then((result) => {
          const { teams } = this.state;
          teams.push(result);
          this.setState({ teams });
        });
    }

    handleRemoveMember = (id, email) => {
      const { teams } = this.state;
      const index = teams.findIndex(team => team._id === id);
      const { members } = teams[index];
      const memberIndex = members.findIndex(member => member.email === email);
      members.splice(memberIndex, 1);
      AppService.service('teams').patch(id, { members })
        .then(() => {
          this.setState({ teams });
        });
    }

    handleAddMember = (id, members) => {
      const { teams } = this.state;
      const index = teams.findIndex(team => team._id === id);
      teams[index].members = members;
      AppService.service('teams').patch(id, { members })
        .then(() => {
          this.setState({ teams });
        });
    }

    render() {
      const data = this.state.teams;
      const { match, classes } = this.props;
      return (
        <div className={classes.root}>
          <Switch>
            <Route
              exact
              path={match.url}
              render={() => (
                <div>
                  <Typography type="title" color="secondary" gutterBottom>
                  Teams
                  </Typography>
                  <ListTeams data={data} openDeleteAlert={this.openDeleteAlert} />
                  <CreateTeam data={data} handleCreate={this.handleCreate} />
                  <AlertDialog
                    open={this.state.alert.open}
                    title={this.state.alert.title}
                    contentText={this.state.alert.contentText}
                    action={this.handleDelete}
                    handleAlertClose={this.handleAlertClose}
                  />
                </div>
          )}
            />
            <Route
              path={`${match.url}/:name`}
              render={props => (
                <TeamDetail
                  {...props}
                  data={this.state.teams.filter(team => team.name === decodeURI(match.params.name))}
                  handleAddMember={this.handleAddMember}
                  handleRemoveMember={this.handleRemoveMember}
                />)
              }
            />
          </Switch>
        </div>
      );
    }
}

export default withRouter(withStyles(styles)(Team));

