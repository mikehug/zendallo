import React from 'react';
import { withRouter } from 'react-router-dom';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import PersonIcon from 'material-ui-icons/Person';
import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const ListMembers = withRouter(props => (
  <div>
    <Grid container align="start">
      <List >
        {props.team && props.team.members.map(member => (
          <div key={member.email}>
            <ListItem >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary={member.email}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => props.handleRemoveMember(props.team._id, member.email)} >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Grid>
  </div>
));

export default ListMembers;
