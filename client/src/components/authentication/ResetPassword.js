import React, { Component } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
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

const ResetPasswordForm = withStyles(styles)((props) => {
  const { isSubmitting, isValid, classes } = props;
  return (
    isSubmitting ?
      <CircularProgress />
      :
      <Form className={classes.formRoot}>
        <Typography variant="title" >Forgot your password?</Typography>
        <div className={classes.formStyle}>
          <div>
            <Field name="password" type="password" component={RenderTextField} placeholder="Password" />
          </div>
          <div>
            <Field name="confirmPassword" type="password" component={RenderTextField} placeholder="Confirm password" />
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

class ResetPassword extends Component {
  handleValidate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Password required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password must match';
    }
    return errors;
  };

  handleSubmit = (values) => {
    const { password } = values;
    console.log(this.props.match.params.slug);
    this.props.createAction({
      action: 'resetPwdLong',
      value: { token: this.props.match.params.slug, password },
    });
  }

  render() {
    console.log(this.props.result);
    return (
      <Paper className={this.props.classes.root} >
        {this.props.result ? //eslint-disable-line 
            this.props.result === 'ok' ?
              <Typography>
               Password has been reset.
                <Link to="/signin" href="/signin" className={this.props.classes.link}> Please signin</Link>

              </Typography> :
              <Redirect to="/auth/resendverification" />
            :
              <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validate={this.handleValidate}
                onSubmit={this.handleSubmit}
                component={ResetPasswordForm}
              />}

      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(ResetPassword));
