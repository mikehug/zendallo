import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import doberman from './doberman.svg';
import collie from './collie.svg';
import poodle from './poodle.svg';
import retriever from './retriever.svg';

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
    this.props.storeResult(this.props.id, profileResult);
  }

  handleChange = (event, value) => {
    this.setState({ value });
    const answer = parseInt(value, 10);
    const ansArray = [...this.state.answers, answer];
    setTimeout(() => this.setState({ value: '', answers: ansArray }), 700);
    if (ansArray.length === this.props.data.length) this.calculateResult(ansArray);
  };

  render() {
    const { data, classes, handleOnClickAlert } = this.props;
    let currentQA = null;
    if (this.state.answers.length !== data.length) currentQA = data[this.state.answers.length];

    return (
      currentQA ? (
        <Grid container align="center" direction="column" >
          <Grid item>
            <Typography type="title" align="center" color="secondary" >
              {currentQA.question}
            </Typography>
          </Grid>
          <Grid container justify="center" >
            <Grid item className={classes.group}>
              <FormControl >
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  {currentQA.options.map((answer, index) => (
                    <FormControlLabel key={index.toString()} value={index.toString()} control={<Radio />} label={answer} />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      ) :
        <Result result={this.state.result} classes={classes} handleOnClickAlert={handleOnClickAlert} />
    );
  }
}

const Result = (props) => {
  const data = [
    { name: 'Driver', value: props.result[0] },
    { name: 'Pioneer', value: props.result[1] },
    { name: 'Relater ', value: props.result[2] },
    { name: 'Analyzer', value: props.result[3] },
  ];
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const legendStyle = { 'font-family': 'Roboto' };
  return (
    // <ResponsiveContainer width={700} height="80%">
    <Grid container align="center" direction="column">
      <Grid item>

        <PieChart width={360} height={350}>
          <Tooltip />
          <Legend verticalAlign="top" layout="horizontal" height={36} align="center" dataKey="name" iconType="circle" style={legendStyle} />
          <Pie startAngle={360} endAngle={0} data={data} label dataKey="value" >
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </Grid>
      {/* <Grid item>
        <Grid container align="center" justify="center" direction="row" className={props.classes.buttons}>

          <Grid item xs={8} sm={6}>
            <Grid container justify="center">
              <Grid item onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Doberman' })} >
                <img src={doberman} width="60" alt="doberman" />
              </Grid>
              <Grid item>
                <Button classes={{ root: props.classes.doberman }} onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Doberman' })}>
                  <Icon >info</Icon> Driving
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8} sm={6}>
            <Grid container justify="center">
              <Grid item onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Poodle' })} >
                <img src={poodle} width="60" alt="poodle" />
              </Grid>
              <Grid item>
                <Button classes={{ root: props.classes.poodle }} onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Poodle' })} >
                  <Icon >info</Icon> Pioneering
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8} sm={6}>
            <Grid container justify="center">
              <Grid item onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Retriever' })}>
                <img src={retriever} width="60" alt="retriever" />
              </Grid>
              <Grid item>
                <Button classes={{ root: props.classes.retriever }} onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Retriever' })}>
                  <Icon >info</Icon> Relating
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8} sm={6}>
            <Grid container justify="center" wrap="wrap">
              <Grid item onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Collie' })}>
                <img src={collie} width="60" alt="collie" />
              </Grid>
              <Grid item>
                <Button classes={{ root: props.classes.collie }} onClick={() => props.handleOnClickAlert({ type: 'Profile Details', message: 'Collie' })} >
                  <Icon >info</Icon> Cautious
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default withStyles(styles)(Activity);
