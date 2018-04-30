import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { AuthManagement, getUser } from './Auth';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import PrivateRoute from './PrivateRoute';


const Verify = withRouter(props => (
  <Typography>
    {props.result || props.createAction({
                action: 'verifySignupLong',
                value: props.match.params.slug,
              })}
  </Typography>
));

const ResendVerification = props => (
  getUser()
    ?
      <div style={{ padding: 10 }} >
        <Typography variant="subheading">
          {props.result}
        </Typography>

        <Button
          color="primary"
          onClick={() => props.createAction({
                action: 'resendVerifySignup',
                value: { email: getUser().email },
              })}
        >
      Resend Verification
        </Button>

      </div>
    :
      <Redirect
        to={{
          pathname: '/signin',
          state: { from: props.location },
        }}
      />


);


class AuthManager extends Component {
  state = {
    result: '',
  }

  createAction = (action) => {
    AuthManagement.create(action)
      .then((result) => {
        console.log(result);
        this.setState({ result: result.message || 'result' });
      })
      .catch((error) => {
        this.setState({ result: error.message || 'error' });
      });
  }


  render() {
    return (
      <div>

        <Route path="/auth/verify/:slug" render={() => <Verify createAction={this.createAction} result={this.state.result} />} />
        <Route path="/auth/reset/:slug" render={() => <ResetPassword createAction={this.createAction} result={this.state.result} />} />
        <PrivateRoute path="/auth/resendverification" render={() => <ResendVerification createAction={this.createAction} result={this.state.result} />} />
        <Route path="/auth/forgotpassword" render={() => <ForgotPassword createAction={this.createAction} result={this.state.result} />} />

      </div>
    );
  }
}

export default withRouter(AuthManager);
