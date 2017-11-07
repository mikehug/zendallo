import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';

const Home = ({ history }) => (
  <div>
    <Button onClick={() => history.push('/app/team')} >
     Go to Team Page
    </Button>
    <Button onClick={() => history.push('/app/session')} >
     Go to Session Page
    </Button>
  </div>
);

export default withRouter(Home);
