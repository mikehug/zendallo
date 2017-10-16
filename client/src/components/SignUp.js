import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Formik, Form, Field } from 'formik';
import AppService, { authManagement } from '../AppService';

const renderTextField = ({ field, form: { touched, errors }, ...props }) =>
  (
    <TextField
      // hintText={label}
      label={(touched[field.name] && errors[field.name]) ? errors[field.name] : ''}
      error={!!((touched[field.name] && errors[field.name]))}
      {...field}
      {...props}
    />
  );

const SignUpForm = (props) => {
  const { isSubmitting, isValid } = props;
  return (
    <Form>
      <div>
        <Field name="email" type="email" component={renderTextField} placeholder="Email" />
      </div>
      <div>
        <Field name="password" type="password" component={renderTextField} />
      </div>
      <div>
        <Field name="confirmPassword" type="password" component={renderTextField} />
      </div>
      <div>
        <Button type="submit" disabled={isSubmitting || !isValid} >Submit</Button>
      </div>
    </Form>
  );
};

const handleValidate = values => authManagement.checkUnique({ email: values.email })
  .catch((result) => {
    const errors = {};
    console.log(result);
    errors.email = 'Email already taken';
    throw (errors);
  })
  .then(() => {
    const errors = {};
    console.log('Validating!');
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
  <div>
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
          .then((response) => {
            setSubmitting(false);
            console.log('Authenticated!', response);
            history.push('/signin');
          })
          .catch((error) => {
            console.error('Error authenticating!', error);
          });
      }}
    />
  </div>
));

export default SignUp;
