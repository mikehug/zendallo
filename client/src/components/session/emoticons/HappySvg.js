import React from 'react';

const HappySvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="24"
    height="24"
    style={{ transform: 'rotate(360deg)' }}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="100%" height="100%" fill="white" />
    <path d="M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5 7.7 8 8.5 8s1.5.7 1.5 1.5zm7 0c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5 14.7 8 15.5 8s1.5.7 1.5 1.5zm-5 7.73c-1.752 0-3.294-.721-4.187-1.813L9.23 14c.453.723 1.522 1.23 2.77 1.23s2.318-.508 2.77-1.23l1.417 1.417C15.294 16.51 13.752 17.23 12 17.23z" fill="#626262" />
  </svg>
);

export default HappySvg;
