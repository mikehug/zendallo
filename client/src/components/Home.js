import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

const Home = () => (
  <Link to="/signin" href="/signin" >
    <Button>
      Sign In
    </Button>
    <Button>
      Sign In
    </Button>
  </Link>
);

export default Home;
