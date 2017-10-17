import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Formik, Form, Field } from 'formik';
import AppService from '../AppService';

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
  (<TextField
    label={(touched[field.name] && errors[field.name]) ? errors[field.name] : ''}
    error={!!((touched[field.name] && errors[field.name]))}
    {...field}
    {...props}
  />);

const SignInForm = withStyles(styles)((props) => {
  const { isSubmitting, isValid, classes } = props;
  return (
    <Form className={classes.root}>
      <Typography type="title" color="secondary" >Sign In</Typography>
      <div className={classes.formStyle}>
        <div>
          <Field name="email" type="email" component={renderTextField} placeholder="Email" />
        </div>
        <div>
          <Field name="password" type="password" component={renderTextField} />
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

class SignIn extends Component {
  state: {
    redirect: {
      pathname: '/'
    }
  }

  componentWillMount() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    this.setState({ redirect: from });
    if (window.localStorage && window.localStorage.getItem('feathers-jwt')) {
      this.login();
    }
  }

  handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password required';
    }
    return errors;
  };

  login = credentials => AppService.authenticate(credentials)
    .then(response => AppService.passport.verifyJWT(response.accessToken))
    .then(payload => AppService.service('users').get(payload.userId))
    .then((user) => {
      AppService.set('user', user);
      this.props.history.push(this.state.redirect.pathname);
    })

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        component={SignInForm}
        validate={this.handleValidate}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          this.login({
            strategy: 'local',
            email: values.email,
            password: values.password,
          })
            .then(() => {
              setSubmitting(false);
            })
            .catch((error) => {
              setSubmitting(false);
              const errors = {};
              console.log('Error authenticating!', error);
              if (error.code === 401) {
                errors.email = 'Invalid login';
              } else errors.email = 'Login error';
              setErrors(errors);
            });
        }}
      />
    );
  }
}


export default withRouter(SignIn);
