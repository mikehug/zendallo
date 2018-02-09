import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

const SessionNotValid = () => (
  <div>
    <Typography variant="subheading" >
                    Session code not valid
    </Typography>
    <Link to="/session" href="/session" >
      <Button> Session Home</Button>
    </Link>

  </div>
);

export default SessionNotValid;
