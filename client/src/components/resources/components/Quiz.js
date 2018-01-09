import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import { tada, headShake } from 'react-animations';
import { red, green } from 'material-ui/colors';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';

const styles = {
  '@keyframes tada': tada,
  '@keyframes headShake': headShake,
  group: {
    margin: '20px 0px 20px 20px ',
    maxWidth: 450,
    minHeight: 250,
    textAlign: 'left',
  },
  correct: {
    backgroundColor: green.A400,
    width: 400,
    animationName: 'tada',
    animationDuration: '1s',
  },
  incorrect: {
    backgroundColor: red.A400,
    width: 400,
    animationName: 'headShake',
    animationDuration: '1s',
  },
};

class Quiz extends Component {
  state = {
    value: '',
    open: false,
    result: {
      title: '',
      content: '',
      action: '',
      answer: false,
    },
  }

  handleChange = (event, value) => {
    const result = value === this.props.data[0].correctAnswer.toString() ?
      {
        title: 'Good job!', content: 'On to next activity', action: 'Continue', answer: true,
      } :
      {
        title: 'Uh, not quite', content: 'Have another go', action: 'Retry', answer: false,
      };
    this.setState({
      value,
      open: true,
      result,
    });
  };

  handleClose = (event, value) => {
    this.setState({ value, open: false });
    if (this.state.result.answer) this.props.nextLesson();
  };


  render() {
    const { classes, data } = this.props;
    const quiz = data[0];
    const ResultDialog = () => (
      <Dialog
        open={this.state.open}
        transition={Slide}
        onRequestClose={this.handleRequestClose}
        classes={{ paper: this.state.result.answer ? this.props.classes.correct : this.props.classes.incorrect }}
      >
        <DialogTitle >
          {this.state.result.title}
        </DialogTitle>

        <DialogContent >
          <DialogContentText>
            {this.state.result.content}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={this.handleClose} color="contrast">
            {this.state.result.action}
          </Button>
        </DialogActions>
      </Dialog>
    );
    return (
      <div>
        <Grid container align="center" direction="column" >
          <Grid item>
            <Typography type="title" align="center" color="secondary" >
              {quiz.question}
            </Typography>
            <FormControl className={classes.group}>
              <RadioGroup
                aria-label="quiz"
                name="quiz"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                {quiz.answers.map((answer, index) => (
                  <FormControlLabel key={index.toString()} value={index.toString()} control={<Radio />} label={answer} />
                ))}
              </RadioGroup>
            </FormControl>
            <ResultDialog />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);
