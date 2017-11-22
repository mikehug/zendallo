import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';

const Home = ({ history }) => (
  <div>
    <Button color="primary" onClick={() => history.push('/signup')} >
     Sign Up
    </Button>
  </div>
);

export default withRouter(Home);
