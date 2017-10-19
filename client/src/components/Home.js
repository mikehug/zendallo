import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

const Home = () => (
  <div>
    <Link to="/team" href="/team">
      <Button>
        Team
      </Button>
    </Link>

  </div>
);

export default Home;
