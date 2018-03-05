import React from 'react';
import Grid from 'material-ui/Grid';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
// import CourseContent from './CourseContent';
import ModuleSummary from './ModuleSummary';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Explore = ({
 classes, course, module, changeTab, setLessons 
}) => (
  <Grid
    container
    className={classes.root}
    spacing={0}
    direction="row"
    justify="center"
  >
    {/* <Grid item xs={12} sm={12} md={3} className={classes.item}>
      <CourseContent title={course.title} course={course} />
    </Grid> */}
    <Grid item xs={12} sm={8} md={6} className={classes.item}>
      <ModuleSummary
        module={module}
        changeTab={changeTab}
        setLessons={setLessons}
      />
    </Grid>
  </Grid>
);

export default withRouter(withStyles(styles)(Explore));
