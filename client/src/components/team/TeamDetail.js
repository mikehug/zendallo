import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import NavigateBeforeIcon from 'material-ui-icons/NavigateBefore';
import AddMember from './AddMember';
import ListMembers from './ListMembers';

const styles = () => ({
  nav: {
    textAlign: 'left',
  },
  add: {
    textAlign: 'right',
  },
});

const TeamDetail = ({
  match, data, handleAddMember, handleRemoveMember, classes,
}) => (
  <div>
    <div className={classes.nav}>
      <Link to="/team" href="/team" >
        <IconButton>
          <NavigateBeforeIcon />
        </IconButton>
      </Link>
    </div>
    <Typography type="subheading" >{match.params.name} </Typography>
    <ListMembers team={data[0]} handleRemoveMember={handleRemoveMember} />
    <div className={classes.add}>
      <AddMember team={data[0]} handleAddMember={handleAddMember} />
    </div>
  </div>
);

export default withStyles(styles)(TeamDetail);
