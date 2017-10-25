import React from 'react';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom';

const Session = withRouter(({ history }) => (
  <div>
    <Button onClick={() => history.push('/session/create')} >
   Create Session
    </Button>
  </div>
));

export default Session;
