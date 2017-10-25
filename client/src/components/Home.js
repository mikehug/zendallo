import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';

const Home = ({ history }) => (
  <div>
    <Button onClick={() => history.push('/team')} >
     Go to Team Page
    </Button>
    <Button onClick={() => history.push('/session')} >
     Go to Session Page
    </Button>
  </div>
);

export default withRouter(Home);
