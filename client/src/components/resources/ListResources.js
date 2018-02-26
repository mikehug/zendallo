import React from 'react';
import { withRouter } from 'react-router-dom';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import PlaylistPlayIcon from 'material-ui-icons/PlaylistPlay';
// import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const ListSessions = withRouter(props => (
  <div>
    <Grid container align="start">
      <List >
        {props.data.map(resource => (
          <div key={resource._id}>
            <ListItem button onClick={() => props.history.push(`/resources/${encodeURI(resource.url)}`)} >
              <ListItemIcon>
                <PlaylistPlayIcon />
              </ListItemIcon>
              <ListItemText
                primary={resource.title}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Complete" >
                  {/* <DeleteIcon /> */}
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
