import React from 'react';
import { withRouter } from 'react-router-dom';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Button from 'material-ui/Button';
import PersonIcon from 'material-ui-icons/Person';
import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const ListMembers = withRouter(props => (
  <Grid>
    <List>
      {props.team.members &&
        props.team.members.map(member => (
          <div key={member.email}>
            <ListItem>
              <ListItemText primary={member.email} />
              <ListItemSecondaryAction>
                <Button
                  aria-label="Delete"
                  onClick={() =>
                    props.handleRemoveMember(props.team._id, member.email)
                  }
                >
                  <DeleteIcon />
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
    </List>
  </Grid>
));

export default ListMembers;
