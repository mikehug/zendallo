import React from 'react';

const NeutralSvg = props => (
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
    <path d="M8.5 10.998a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-3.5 9a8 8 0 0 0 8-8 8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8zm-.006-18c5.526 0 10.005 4.477 10.005 10s-4.479 10-10.005 10c-5.527 0-9.995-4.477-9.995-10s4.468-10 9.995-10zM9 14h6a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" fill="#626262" />
  </svg>

);

export default NeutralSvg;

