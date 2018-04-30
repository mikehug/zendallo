import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { Formik, Field, Form } from 'formik';
import { CircularProgress } from 'material-ui/Progress';
import RenderTextField from '../utils/RenderTextField';


const styles = () => ({
  root: {
    minWidth: 320,
    maxWidth: 450,
    padding: 16,
    margin: 10,
  },
  link: {
    textDecoration: 'none',
    color: 'purple',

  },
  formRoot: {
    margin: 10,
    width: 250,
  },
  formStyle: {
    padding: 10,
  },
});

const ForgotPasswordForm = withStyles(styles)((props) => {
  const { isSubmitting, isValid, classes } = props;
  return (
    isSubmitting ?
      <CircularProgress />
      :
      <Form className={classes.formRoot}>
        <Typography variant="title" >Forgot your password?</Typography>
        <div className={classes.formStyle}>
          <div>
            <Field autoFocus name="email" type="email" component={RenderTextField} placeholder="Email" />
          </div>
          <Grid container direction="row-reverse" >
            <Grid item>
              <Button type="submit" disabled={isSubmitting || !isValid} >Reset</Button>
            </Grid>
          </Grid>
        </div>
      </Form>
  );
});

class ForgotPassword extends Component {
  handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  handleSubmit = (values, { setSubmitting }) => this.props.createAction({
    action: 'sendResetPwd',
    value: values,
  })

  render() {
    return (
      <Paper className={this.props.classes.root} >
        {this.props.result ?
          <Typography> Check your email</Typography> :
          <Formik
            initialValues={{ email: '' }}
            validate={this.handleValidate}
            onSubmit={this.handleSubmit}
            component={ForgotPasswordForm}
          />}

      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(ForgotPassword));
