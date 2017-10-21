import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';

const Home = ({ history }) => (
  <div>
    <Button onClick={() => history.push('/team')} >
      Team
    </Button>
  </div>
);

export default withRouter(Home);
