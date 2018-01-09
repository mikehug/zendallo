import React from 'react';
import DobermanDetails from './DobermanDetails';
import PoodleDetails from './PoodleDetails';
import CollieDetails from './CollieDetails';
import RetrieverDetails from './RetrieverDetails';

const ProfileDetails = (props) => {
  switch (props.message) {
    case 'Doberman':
      return <DobermanDetails />;
    case 'Poodle':
      return <PoodleDetails />;
    case 'Collie':
      return <CollieDetails />;
    case 'Retriever':
      return <RetrieverDetails />;
    default:
      return null;
  }
};

export default ProfileDetails;
