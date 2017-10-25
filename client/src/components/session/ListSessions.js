import React from 'react';
import { withRouter } from 'react-router-dom';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import EditIcon from 'material-ui-icons/Edit';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const ListSessions = withRouter(props => (
  <div>
    <Grid container align="start">
      <List >
        {props.data.map(session => (
          <div key={session.code}>
            <ListItem button onClick={() => props.history.push(`/session/${encodeURI(session.code)}`)} >
              <ListItemIcon>
                <GroupWorkIcon />
              </ListItemIcon>
              <ListItemText
                primary={session.code}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Edit" >
                  <EditIcon />
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

export default ListSessions;
