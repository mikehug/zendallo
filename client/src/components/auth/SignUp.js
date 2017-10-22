import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Formik, Form, Field } from 'formik';
import AppService from '../../AppService';
import { authManagement } from './Auth';

const styles = () => ({
  root: {
    margin: 10,
    width: 200,
  },
  formStyle: {
    padding: 10,
  },
});

const renderTextField = ({ field, form: { touched, errors }, ...props }) =>
  (
    <TextField
      label={(touched[field.name] && errors[field.name]) ? errors[field.name] : ''}
      error={!!((touched[field.name] && errors[field.name]))}
      {...field}
      {...props}
    />
  );

const SignUpForm = withStyles(styles)((props) => {
  const { isSubmitting, isValid, classes } = props;
  return (
    <Form className={classes.root}>
      <Typography type="title" color="secondary" >Create New Account</Typography>
      <div className={classes.formStyle}>
        <div>
          <Field autoFocus name="email" type="email" component={renderTextField} placeholder="Email" />
        </div>
        <div>
          <Field name="password" type="password" component={renderTextField} />
        </div>
        <div>
          <Field name="confirmPassword" type="password" component={renderTextField} />
        </div>
        <Grid container direction="row-reverse" >
          <Grid item>
            <Button type="submit" disabled={isSubmitting || !isValid} >Submit</Button>
          </Grid>
        </Grid>
      </div>
    </Form>
  );
});

const handleValidate = values => authManagement.checkUnique({ email: values.email })
  .catch(() => {
    const errors = {};
    errors.email = 'Email already taken';
    throw (errors);
  })
  .then(() => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password must match';
    }
    if (Object.keys(errors).length) {
      throw (errors);
    }
  });

const SignUp = withRouter(({ history }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      confirmPassword: '',
    }}
    component={SignUpForm}
    validate={handleValidate}
    onSubmit={(values, { setSubmitting }) => {
      AppService.service('users').create({
        email: values.email,
        password: values.password,
      })
        .then(() => {
          // TODO: Use response to pass user email to sigin page
          setSubmitting(false);
          history.push('/signin');
        })
        .catch((error) => {
          // TODO: Use error to create alert
          console.log('Error creating user!', error);
          setSubmitting(false);
        });
    }}
  />
));

export default SignUp;
