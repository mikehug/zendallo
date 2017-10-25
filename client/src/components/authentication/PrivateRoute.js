import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppService from '../../AppService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      AppService.get('user') ?
        (<Component {...props} />)
        :
        (<Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />)
    )}
  />
);

export default PrivateRoute;
