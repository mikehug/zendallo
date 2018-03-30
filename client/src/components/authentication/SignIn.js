import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { Formik } from 'formik';
import { CircularProgress } from 'material-ui/Progress';
import SignInForm from './SignInForm';


const styles = () => ({
  root: {
    minWidth: 320,
    maxWidth: 450,
    padding: 16,
    margin: 10,
  },
  link: {
    textDecoration: 'none',
  },
});

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
          errors.email = 'User/password incorrect';
        } else { errors.email = 'Sign in problem'; }
        setErrors(errors);
      });
  };

  render() {
    return (
      <Paper className={this.props.classes.root} >
        {this.state.isLogingIn ?
          <CircularProgress /> :
          <Formik
            initialValues={{ email: '', password: '' }}
            component={SignInForm}
            validate={this.handleValidate}
            onSubmit={this.handleSubmit}
          />}
        <Typography color="textSecondary" >
          {"Don't have an account?"}
          <Link to={`/signup/#${this.state.redirect.pathname}`} href="/signup" className={this.props.classes.link} > Sign Up</Link>
        </Typography>


      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(SignIn));
