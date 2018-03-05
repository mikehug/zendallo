import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Result from './ProfileResult';

const styles = {
  group: {
    width: 250,
    padding: '10px 0 20px 50px',
    minHeight: 250,
    textAlign: 'left',
  },
  buttons: {
    maxWidth: 360,
    paddingBottom: 20,
  },
  doberman: {
    color: '#0088FE',
  },
  poodle: {
    color: '#00C49F',
  },
  retriever: {
    color: '#FFBB28',
  },
  collie: {
    color: '#FF8042',
  },
};

class Activity extends Component {
  state = {
    value: '',
    answers: [],
    result: [],
  };

  calculateResult = (answers) => {
    const result = [0, 0, 0, 0];
    answers.map((category) => {
      result[category] += 1;
      return result;
    });
    this.setState({ result });
    const profileResult = {
      profileResult: {
        result,
        answers,
        createdOn: Date(),
      },
    };
    this.props.storeResult(profileResult);
  };

  handleChange = (event, value) => {
    this.setState({ value });
    const answer = parseInt(value, 10);
    const ansArray = [...this.state.answers, answer];
    setTimeout(() => this.setState({ value: '', answers: ansArray }), 700);
    if (ansArray.length === this.props.data.length) {
      this.calculateResult(ansArray);
    }
  };

  render() {
    const { data, classes, handleOnClickAlert } = this.props;
    let currentQA = null;
    if (this.state.answers.length !== data.length) {
      currentQA = data[this.state.answers.length];
    }

    return currentQA ? (
      <Grid container align="center" direction="column">
        <Grid item>
          <Typography variant="title" align="center">
            {currentQA.question}
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Grid item className={classes.group}>
            <FormControl>
              <RadioGroup
                aria-label="quiz"
                name="quiz"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                {currentQA.options.map((answer, index) => (
                  <FormControlLabel
                    key={index.toString()}
                    value={index.toString()}
                    control={<Radio />}
                    label={answer}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    ) : (
      <Result
        result={this.state.result}
        classes={classes}
        handleOnClickAlert={handleOnClickAlert}
      />
    );
  }
}

export default withStyles(styles)(Activity);
