import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import VideoLibraryIcon from 'material-ui-icons/VideoLibrary';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import ToysIcon from 'material-ui-icons/Toys';
import StarIcon from 'material-ui-icons/Star';
import pink from 'material-ui/colors/pink';

const styles = {
  root: {
    padding: 20,
    fontColor: 'grey',
  },
  title: {
    paddingTop: 10,
  },
  list: {

  },
  icon: {
    color: 'white',
  },
};

const getLessonIcon = (type) => {
  switch (type) {
    case 'video':
      return <VideoLibraryIcon />;
    case 'quiz':
      return <CheckCircleIcon />;
    case 'activity':
      return <ToysIcon />;
    default:
      return <StarIcon />;
  }
};

const ModuleSummary = ({
  classes, module, changeTab, setLessons,
}) => (
  <div className={classes.root}>
    {/* <Divider /> */}
    <Typography type="headline" color="secondary" gutterBottom className={classes.title}>
      {module.name}
    </Typography>
    <Typography type="body1" color="secondary" gutterBottom>
      {module.description}
    </Typography>
    <List className={classes.list}>
      {module.lessons && module.lessons.map((lesson, index) => (
        <div key={lesson.id} >
          <ListItem
            button
            onClick={() => {
              setLessons(module.lessons, index);
              changeTab(1);
            }}
          >
            <Avatar >
              <span className={classes.icon} >
                {getLessonIcon(lesson.content.type)}
              </span>
            </Avatar>
            <ListItemText primary={lesson.name} secondary={`${lesson.content.duration} seconds`} />
          </ListItem>
          <Divider inset />
        </div>
      ))}
    </List>
  </div>
);

export default withRouter(withStyles(styles)(ModuleSummary));
