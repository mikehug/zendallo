import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import Loader from 'react-loader';
import SignInForm from './SignInForm';

class SignIn extends Component {
  state = {
    redirect: {
      pathname: '/dashboard',
    },
    isLogingIn: false,
  }

  componentWillMount() {
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } };
    this.setState({ redirect: from });
    if (window.localStorage && window.localStorage.getItem('feathers-jwt')) {
      this.setState({ isLogingIn: true });
      this.props.handleLogin()
        .then(() => {
          this.props.history.push(this.state.redirect.pathname);
        }).catch(() => {
          this.setState({ isLogingIn: false });
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

  handleSubmit = (values, { setSubmitting, setErrors }) => {
    this.props.handleLogin({
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
        } else { errors.email = 'Login error'; }
        setErrors(errors);
      });
  };

  render() {
    return (
      this.state.isLogingIn ?
        <Loader /> :
        <Formik
          initialValues={{ email: '', password: '' }}
          component={SignInForm}
          validate={this.handleValidate}
          onSubmit={this.handleSubmit}
        />
    );
  }
}

export default withRouter(SignIn);
