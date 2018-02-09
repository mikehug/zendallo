import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import NavigateBeforeIcon from 'material-ui-icons/NavigateBefore';
import AddMember from './AddMember';
import ListMembers from './ListMembers';

const styles = () => ({
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
  add: {
    textAlign: 'right',
  },
});

const TeamDetail = withRouter(({
  match, data, handleAddMember, handleRemoveMember, classes, history,
}) => (
  <div>
    <div className={classes.header} >
      <IconButton onClick={() => history.push('/team')} className={classes.icon} >
        <NavigateBeforeIcon />
      </IconButton>
      <div className={classes.title} >
        <Typography variant="title" >
          {match.params.name}
        </Typography>
      </div>
    </div>

    <ListMembers team={data} handleRemoveMember={handleRemoveMember} />
    <div className={classes.add}>
      <AddMember team={data} handleAddMember={handleAddMember} />
    </div>
  </div>
));

export default withStyles(styles)(TeamDetail);
