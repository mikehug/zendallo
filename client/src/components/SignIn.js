import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import Loader from 'react-loader';
import SignInForm from './SignInForm';
import { login } from '../Auth';

class SignIn extends Component {
  state = {
    redirect: {
      pathname: '/team',
    },
    isLogingIn: false,
  }

  componentWillMount() {
    const { from } = this.props.location.state || { from: { pathname: '/team' } };
    this.setState({ redirect: from });
    if (window.localStorage && window.localStorage.getItem('feathers-jwt')) {
      this.setState({ isLogingIn: true });
      login()
        .then(() => {
          this.props.history.push(this.state.redirect.pathname);
        });
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

  render() {
    return (
      this.state.isLogingIn ?
        <Loader /> :
        <Formik
          initialValues={{ email: '', password: '' }}
          component={SignInForm}
          validate={this.handleValidate}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            login({
              strategy: 'local',
              email: values.email,
              password: values.password,
            })
              .then(() => {
                this.props.history.push(this.state.redirect.pathname);
              })
              .catch((error) => {
                setSubmitting(false);
                const errors = {};
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
