import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ListIcon from 'material-ui-icons/KeyboardArrowRight';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  root: {
    paddingLeft: 20,
    paddingRight: 10,
    fontColor: 'grey',
  },
  bigAvatar: {
    width: 75,
    height: 75,
    padding: 20,
  },
  title: {
    paddingLeft: 5,
  },
  list: {
    paddingLeft: 0,
  },
  listText: {
    paddingLeft: 0,
  },
  notSelected: {
    color: theme.palette.grey[500],
  },
  selected: {
    color: theme.palette.secondary[500],
  },
});

const CourseContent = ({
  classes, title, course, match, history,
}) => (
  <div className={classes.root}>
    <Avatar
      alt="Learn Icon"
      className={classNames(classes.avatar, classes.bigAvatar)}
    />
    <Typography variant="title" className={classes.title} gutterBottom>
      {title}
    </Typography>
    <List dense >
      {course.modules && course.modules.map(module => (
        <ListItem
          button
          key={module.id}
          className={classes.list}
          onClick={() => history.push(`/app/course/${course.url}/module/${module.url}`)}
        >
          <ListIcon {...match.params.module === module.url ?
            { className: classes.selected } :
            { className: classes.notSelected }}
          />
          <ListItemText primary={module.name} className={classes.listText} />
        </ListItem>))}
    </List>
  </div >
);
export default withRouter(withStyles(styles)(CourseContent));
