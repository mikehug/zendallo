import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Video from './components/Video';
import Quiz from './components/Quiz';
import Activity from './components/Activity';

const styles = {
  root: {
    flexGrow: 1,
  },
  stepper: {
    maxWidth: 400,
    flexGrow: 1,
  },
  title: {
    padding: 20,
  },
  content: {
    padding: '0px 20px 20px 20px ',
    minHeight: 600,
  },
  description: {
    padding: ' 40px',
    flexGrow: 1,
  },
};

class Practice extends React.Component {
  state = {
    activeStep: 0,
  };

  getLessonComponent = (lessons) => {
    const { content } = lessons[this.state.activeStep];
    const nextLesson = lessons[this.state.activeStep + 1];
    switch (content.type) {
      case 'video':
        return <Video src={content.src} nextLesson={this.handleNext} />;
      case 'quiz':
        return <Quiz data={content.data} nextLesson={this.handleNext} />;
      case 'activity':
        return (
          <Activity
            data={content.data}
            nextLesson={this.handleNext}
            storeResult={this.storeResult}
            id={this.state.activeStep}
            handleOnClickAlert={this.handleOnClickAlert}
          />
        );
      default:
        return <div>No Lesson of that type!</div>;
    }
  };

  storeResult = (data) => {
    this.props.storeResult(data);
  };

  handleNext = () => {
    if (this.state.activeStep < this.props.module.lessons.length) {
      this.setState({
        activeStep: this.state.activeStep + 1,
      });
    }
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleOnClickAlert = (result) => {
    console.log(result);
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        justify="space-between"
        spacing={0}
        direction="column"
      >
        <Grid item>
          <Divider />
          {/* <MobileStepper
            variant="dots"
            steps={
              this.props.module.lessons ? this.props.module.lessons.length : 0
            }
            position="static"
            activeStep={this.state.activeStep}
            className={classes.stepper}
            nextButton={
              <Button
                onClick={this.handleNext}
                disabled={this.state.activeStep === 5}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                onClick={this.handleBack}
                disabled={this.state.activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          /> */}
          <Typography
            variant="headline"
            align="center"
            className={classes.title}
          >
            {this.props.module.lessons &&
              this.props.module.lessons[this.state.activeStep].name}
          </Typography>
          <div className={classes.content}>
            {this.props.module.lessons &&
              this.getLessonComponent(this.props.module.lessons)}
            {/* <Divider />

            <Typography variant="body1"  className={classes.description} gutterBottom align="center" >
              {this.props.module.lessons && this.props.module.lessons[this.state.activeStep].content.description}
            </Typography> */}
          </div>
        </Grid>
      </Grid>
    );
  }
}

Practice.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Practice);
