import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { Formik, Form, Field } from 'formik';
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

const SignInForm = withStyles(styles)((props) => {
  const { isSubmitting, isValid, classes } = props;
  return (
    isSubmitting ?
      <CircularProgress />
      :
      <Form className={classes.formRoot}>
        <Typography variant="title" >Sign In</Typography>
        <div className={classes.formStyle}>
          <div>
            <Field autoFocus name="email" type="email" component={RenderTextField} placeholder="Email" />
          </div>
          <div>
            <Field name="password" type="password" component={RenderTextField} placeholder="Password" />
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
        <Typography color="textSecondary" gutterBottom>
          {"Don't have an account?"}
          <Link to={`/signup/#${this.state.redirect.pathname}`} href="/signup" className={this.props.classes.link} > Sign Up</Link>
        </Typography>
        <Typography color="textSecondary" gutterBottom >

          <Link to="/auth/forgotpassword" href="/auth/forgotpassword" className={this.props.classes.link}> Forgotten Password?</Link>
        </Typography>


      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(SignIn));
