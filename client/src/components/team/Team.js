import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { withRouter } from 'react-router-dom';
import ListTeams from './ListTeams';
import CreateTeam from './CreateTeam';
import AppService from '../../AppService';
import AlertDialog from '../AlertDialog';

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
          console.log(result.data);
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
      AppService.service('teams').create({ name })
        .then((result) => {
          console.log(result);
          const { teams } = this.state;
          teams.push(result);
          this.setState({ teams });
        });
    }

    render() {
      const data = this.state.teams;
      return (
        <div className={this.props.classes.root}>
          <Typography type="title" color="secondary">
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
      );
    }
}

export default withRouter(withStyles(styles)(Team));

