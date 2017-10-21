import React, { Component } from 'react';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import GroupIcon from 'material-ui-icons/Group';
import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const ListTeams = props => (
  <div>
    <Grid container align="start">
      <List >
        {props.data.map(team => (
          <div key={team.name}>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText
                primary={team.name}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => props.openDeleteAlert(team)} >
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
);

export default ListTeams;
