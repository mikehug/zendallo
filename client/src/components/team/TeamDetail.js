import React from 'react';
import { Link } from 'react-router-dom';

const TeamDetail = ({ match, data }) => (
  <div>
    <Link to="/team" href="/team" >Back</Link>
    <h3>Name: {match.params.name} </h3>
    <h3>ID: {data[0] && data[0]._id} </h3>
  </div>
);

export default TeamDetail;
