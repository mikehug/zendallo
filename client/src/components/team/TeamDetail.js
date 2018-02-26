import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import NavigateBeforeIcon from 'material-ui-icons/NavigateBefore';
import AddMember from './AddMember';
import ListMembers from './ListMembers';

const styles = () => ({
  root: {
    marginTop: 15,
    padding: 10,
    width: '100%',
  },
  header: {
    display: 'flex',
  },
  icon: {
    marginTop: -10,
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    marginLeft: -48,

  },
  members: {
    maxWidth: 320,
  },
});

const TeamDetail = withRouter(({
  match, data, handleAddMember, handleRemoveMember, classes, history,
}) => (
  <Paper className={classes.root}>
    <div className={classes.header} >
      <IconButton onClick={() => history.push('/teams')} className={classes.icon} >
        <NavigateBeforeIcon />
      </IconButton>
      <div className={classes.title} >
        <Typography variant="title" >
          {match.params.name}
        </Typography>
      </div>
    </div>

    <Grid container justify="center" spacing={24} className={classes.root} >

      <Grid item xs={12} sm={6} md={5} lg={4} className={classes.members}>

        <ListMembers team={data} handleRemoveMember={handleRemoveMember} />
        <AddMember
          team={data}
          handleAddMember={handleAddMember}
        />

      </Grid>
    </Grid>
  </Paper>
));

export default withStyles(styles)(TeamDetail);
